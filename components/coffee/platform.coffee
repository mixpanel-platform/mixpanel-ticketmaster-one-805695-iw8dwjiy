# Using promises to fulfill requests
Promise = require('es6-promise').Promise
animations = require('create-keyframe-animation')

globals =
    fromMoment: moment()
    toMoment: moment()
    $selector: null
    app: 'All'
    type: 'Total'

getFromMoment = ->
   globals.fromMoment

setFromMoment = (fromMoment) ->
    globals.fromMoment = fromMoment
    return

getToMoment = ->
   globals.toMoment

setToMoment = (toMoment) ->
    globals.toMoment = toMoment
    return

track = ->
    mixpanel.dm.track 'Dashboard View', 'Industry Vertical': 'TicketMaster Dash'
    mixpanel.dm.identify()
    return

# We only want to do this once, on successful processing & rendering of data
trackOnce = _.once track

# Create a groupByKey mixin
_.mixin(
    groupByKey: (obj) ->
        if obj?
            obj = if _.isArray(obj) then obj else _.toArray obj
            keys = _.keys obj[0]
            return _.object keys, _.map keys, _.partial _.pluck, obj
        return null
)

# Create a sumByKey mixin
# Equivalent to the following:
# _.object(myKeys, _.map(_.map(myKeys, _.partial(_.pluck, myObj)), _.partial(_.reduce, _, sum, 0)))
_.mixin(
    sumByKey: (obj) ->
        if obj?
            obj = if _.isArray(obj) then obj else _.toArray obj
            keys = _.keys obj[0]
            return _.object keys, _.map _.groupByKey(obj), _.partial _.reduce, _, sum, 0
        return null
)

# Sum function
sum = (memo, num) -> memo + num

# Capitalizes the first word in each string
capitalizeString = (str) ->
    str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
String::toCapitalized = ->
    @replace /\w\S*/g, capitalizeString

# Converts a number to it's dollar amount
constants =
    TRILLION: 1e12
    BILLION: 1e9
    MILLION: 1e6
    THOUSAND: 1e3
    HUNDRED: 100
Number::condensedValue = ->
    formatHelper = (value) ->
        # Assumes passed-in number will not be of the form XXXX.0
        isDecimal = value % 1 isnt 0
        result = if isDecimal and value < 100 then value.toFixed 1 else Math.floor value
    value = @valueOf()
    isDecimal = value % 1 isnt 0
    switch
        when value >= constants.TRILLION then (formatHelper value / constants.TRILLION) + 'T'
        when value >= constants.BILLION then (formatHelper value / constants.BILLION) + 'B'
        when value >= constants.MILLION then (formatHelper value / constants.MILLION) + 'M'
        when value >= constants.THOUSAND then (formatHelper value / constants.THOUSAND) + 'K'
        when value >= constants.HUNDRED then (formatHelper value)
        when value < constants.HUNDRED and isDecimal then '$' + @toFixed 2
        else @

setReportTitle = ->
    $reportTitle = $('#report-title')
    fromString = globals.fromMoment.format 'YYYY-MM-DD'
    toString = globals.toMoment.format 'YYYY-MM-DD'
    $reportTitle.text 'Executive Dash for ' + fromString + '-' + toString 
    return

initLoadingScreen = ->
    loadingSymbol = require('../../images/loading-symbol.svg')
    $containerReport = $('.container-report')
    $containerReport.append(loadingSymbol)
    return

showLoadingScreen = ->
    $containerReport = $('.container-report')
    $loadingSymbol = $('#loading-symbol')
    if not $containerReport.hasClass 'loading'
        $('#pickers').addClass 'hidden'
        $('#meters').addClass 'hidden'
        $('#columns').addClass 'hidden'
        $('#app-loads').addClass 'hidden'
        $loadingSymbol.removeAttr 'class'
        $containerReport.addClass 'loading'
    return

# Only show loading symbol
showLoadingSymbol =->
    $containerReport = $('.container-report')
    $loadingSymbol = $('#loading-symbol')
    if not $containerReport.hasClass 'loading'
        $loadingSymbol.removeAttr 'class'
        $containerReport.addClass 'loading'
    return


hideLoadingScreen = ->
    $containerReport = $('.container-report')
    $loadingSymbol = $('#loading-symbol')
    if $containerReport.hasClass 'loading'
        $('#pickers').removeClass 'hidden'
        $('#meters').removeClass 'hidden'
        $('#columns').removeClass 'hidden'
        $('#app-loads').removeClass 'hidden'
        $loadingSymbol.attr 'class', 'hidden'
        $containerReport.removeClass 'loading'
    return

addRiskTableHeader = () ->
    $table = $('.mp-table-risk')
    $header = null
    $header = $('<tr class="mp-table-header mp-table-2-col"><th class="mp-table-header-item name">LAST USE DATE RANGE</th><th class="mp-table-header-item count">COUNT</th></tr>')
    $table.html $header
    return

addUsageTableHeader = () ->
    $table = $('.mp-table-usage')
    $header = null
    $header = $('<tr class="mp-table-header mp-table-3-col"><th class="mp-table-header-item csm">CSM</th><th class="mp-table-header-item company">CLIENT</th><th class="mp-table-header-item count">APP COUNT</th></tr>')
    $table.html $header
    return

addUsageRow = (csm, company, count, account) ->
    $table = $('.mp-table-usage')
    $row = null
    $row = $('<tr class="mp-table-row mp-table-3-col"><td class="mp-table-row-item csm">' + csm +
            '</td><td class="mp-table-row-item company"><a href="http://salesforce.com/'+ account + '">' + company + '</a>' +
            '</td><td class="mp-table-row-item count">' + count +
            '</td></tr>')
    $table.append $row
    return

addRiskRow = (bucket, count) ->
    $table = $('.mp-table-risk')
    $row = null
    $row = $('<tr class="mp-table-row mp-table-2-col"><td class="mp-table-row-item bucket">' + bucket +
            '</td><td class="mp-table-row-item count">' + count + '</td></tr>')
    $table.append $row
    return

# Helper to remove existing entries from a table
clearUserTable = (userType) ->
    userTable = '#' + userType + '-users-table'
    $(userTable).empty()
    return

# Helper to set and style the selector widget
setSelector = (options) ->
    globals.$selector = $('#select').MPSelect options
    # Set up handler
    globals.$selector.on 'change', (event, selection) ->
        from = moment().subtract 29, 'days'
        to = moment()
        showLoadingSymbol()
        getResults(from, to)
    return

# Adapted from platform
drawAxisBackgrounds = (topOffset) ->
    chartOptions = @options.chart
    cornerRadius = 0
    yWidth = @chartWidth - @plotWidth - (chartOptions.spacingLeft || (chartOptions.spacing && chartOptions.spacing[3]) || 0)
    yHeight = @plotHeight + (chartOptions.spacingTop || (chartOptions.spacing && chartOptions.spacing[0]) || 0)
    # Draw plot background
    @renderer.rect(0, @plotTop + topOffset, @chartWidth, @plotHeight - topOffset, cornerRadius).attr(
        'stroke-width': 0
        'fill': 'white'
        'zIndex': 0
    ).add()
    # Draw the y-axis background
    @renderer.rect(1, @plotTop + topOffset + 1, yWidth - 10, @plotHeight - 1 - topOffset, cornerRadius).attr(
        'stroke-width': 0
        'fill': '#FBFCFD'
        'zIndex': 0
    ).add()
    yAxis = @renderer.crispLine(['M', yWidth - 10, @plotTop, 'L', yWidth - 10, @plotHeight + @plotTop], 1)
    (_.bind killLastGridline, @)()
    return

# this function is a hack because highcharts insists on showing a
# gridline for the 0th label on the y-axis, which conflicts with
# the x-axis
killLastGridline = ->
    gridlines = $('.highcharts-grid path', @container).show()
    line = _.chain gridlines
        .map (gridline) ->
            $gridline = $(gridline)
            [$gridline, $gridline.offset().top]
        .sortBy (gridline) -> gridline[1]
        .last()
        .value()
    if line?
        line[0].hide()
    return

getOrgs = (from, to) ->
    script = "function main() {return join(People(),Events({from_date: params.from,to_date: params.to,event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user).groupBy(['user.properties.salesforceOrgId'], state => 1).reduce(mixpanel.reducer.count())}"
    fromString = from.format 'YYYY-MM-DD'
    toString = to.format 'YYYY-MM-DD'
    params = from: fromString, to: toString
    Promise.resolve(MP.api.jql script, params)

getAppOrgs = (from, to) ->
    script = "function main() {return join(People(),Events({from_date: params.from,to_date: params.to,event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user && tuple.user.properties.salesforceOrgId).groupBy(['event.properties.App', 'user.properties.salesforceOrgId'], state => 1).groupBy(['key.1'], mixpanel.reducer.count()).filter(item => item.value >= 2).reduce(mixpanel.reducer.count())}"
    fromString = from.format 'YYYY-MM-DD'
    toString = to.format 'YYYY-MM-DD'
    params = from: fromString, to: toString
    Promise.resolve(MP.api.jql script, params)

getNewOrgs = (from, to) ->
    script = "function main() {return join(People(),Events({from_date: '2015-01-01',to_date: params.to, event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user && tuple.user.properties.salesforceOrgId).groupBy(['user.properties.salesforceOrgId'], (accs, tuples) => {var res; _.each(tuples, tuple => {if (!res || res > tuple.event.time){res = tuple.event.time}});_.each(accs, acc => {if (!res || res > acc){res = acc}});return res}).map(item => item.value).filter(item => item > new Date(params.from)).reduce(mixpanel.reducer.count())}"
    fromString = from.format 'YYYY-MM-DD'
    toString = to.format 'YYYY-MM-DD'
    params = from: fromString, to: toString
    Promise.resolve(MP.api.jql script, params)

getUsage = (from, to) ->
    script = "function main() {return join(People(),Events({from_date: params.from,to_date: params.to,event_selectors: [{event: 'To: App Load'}]})).filter(tuple => tuple.event && tuple.user && tuple.user.properties.salesforceOrgId).groupBy(['event.properties.App', 'user.properties.salesforceOrgId', 'user.properties.CSM', 'user.properties.Org'], _ => 1).groupBy(['key.1', 'key.2', 'key.3' ], mixpanel.reducer.count()).filter(item => item.key[0] != 'NO_salesforceOrgId' && item.key[1] != 'NO_CSM' && item.key[2] != 'unavailable' ).reduce(mixpanel.reducer.top(5))}"
    fromString = from.format 'YYYY-MM-DD'
    toString = to.format 'YYYY-MM-DD'
    params = from: fromString, to: toString
    Promise.resolve(MP.api.jql script, params)

getRisk = () =>
    script = "function main() {return People().filter(user => user.properties.salesforceOrgId).groupBy(['properties.salesforceOrgId'], (accs, items) => {var res; _.each(items, item => {var daysAgo = (new Date().getTime() - new Date(item.properties.$last_login).getTime()) / 86400000;daysAgo = daysAgo > 90? 90 : daysAgo;if (!res || res > daysAgo ){ res = daysAgo }});_.each(accs, acc => {if (!res || res > acc){res = acc}});return res}).map(item => ({time: item.value})).groupBy([mixpanel.numeric_bucket('time', {offset: 0, bucket_size:30})], mixpanel.reducer.count()).filter(item => item.key[0] >= 0).reduce((accs, items) =>{ var res = {}; _.each(items, item => res[item.key] = item.value); _.each(accs, acc => res = acc); return res}).map(item => {var res  = {};_.each(item, (val, bucket) => {res[buckets[bucket]] = val});return res});};var buckets = { '0': '0-30', '30' : '31-60', '60' : '61-90', '90' : '90+' }"
    Promise.resolve(MP.api.jql script)

getAppLoadTrends = (from, to, type, app) ->

    switch type
      when 'Total' then script = "function main() {return Events({from_date: params.from,to_date:   params.to,event_selectors: [{event: 'To: App Load'}]}).filter(item => params.app === 'All' || params.app == item.properties.App).groupBy([getDay], mixpanel.reducer.count());}function getDay(event) {return new Date(event.time).toISOString().substr(0, 10);}"
      when 'Users' then script = "function main() {return Events({from_date: params.from,to_date:   params.to,event_selectors: [{event: 'To: App Load'}]}).filter(item => params.app === 'All' || params.app == item.properties.App).groupByUser([getDay], _ => 1).groupBy(['key.1'], mixpanel.reducer.count());}function getDay(event) {return new Date(event.time).toISOString().substr(0, 10);}"
      when 'Orgs' then script = "function main() {return Events({from_date: params.from,to_date:   params.to,event_selectors: [{event: 'To: App Load'}]}).filter(item => (params.app === 'All' || params.app == item.properties.App) && item.properties.Org).groupBy([getDay, 'properties.Org'], _ => 1).groupBy(['key.0'], mixpanel.reducer.count());}function getDay(event) {return new Date(event.time).toISOString().substr(0, 10);}"
      else
        console.log 'App Load Error'
    fromString = from.format 'YYYY-MM-DD'
    toString = to.format 'YYYY-MM-DD'
    params = from: fromString, to: toString, app: app
    Promise.resolve(MP.api.jql script, params)

processNumericData = (results) ->
    results

processUserData = (results) ->
    # Get top 10 power users
    _.chain results
        .map (obj) ->
            csm: obj.key[1]
            company: obj.key[2]
            count: obj.value
            account: obj.key[0]
        .value()

processRiskData = (results) ->
    results[0]

processAppLoadData = (results) ->
  res = {}
  _.each results, (obj) ->
    res[obj.key[0]] = obj.value
  return res

showProgress = (meterName, meterValue, delayValue = 0, meterPercentage = meterValue) ->
    animationName = meterName + '-value'
    animation =
        name: animationName
        animation:
            '0%': 'stroke-dasharray': '0 100'
            '100%': 'stroke-dasharray': meterPercentage + ' 100'
        presets:
            duration: 1000
            delay: delayValue
            easing: 'ease-out'
            fillMode: 'forwards'
    $('#' + meterName + '-meter-value').text meterValue
    # Define keyframe animation and run it
    animations.registerAnimation animation
    animations.runAnimation $('#' + meterName + '-progress'), animationName
    return

showRiskTable = (buckets) ->
    addRiskTableHeader()
    _.each buckets, (val, bucket) ->
      addRiskRow bucket, val
    return

showUsageTable = (users) ->
    # Remove any previous values from table
    # clearUserTable userType
    addUsageTableHeader()
    for user in users
        addUsageRow user.csm, user.company, user.count, user.account
    return

showAppLoadRate = (data) ->
    axisFontStyle =
        fontSize: '0.75em'
        fontWeight: 'bold'
        fontFamily: 'Open Sans'
    options =
        chart:
            marginBottom: 30
        xAxis:
            labels:
                style: axisFontStyle
            tickLength: 6
        yAxis:
            gridLineColor: '#E6E8EB'
            gridLineDashStyle: 'Dash'
            gridLineWidth: 1
            labels:
                style: axisFontStyle
    $lineChart = $('#line-mp-chart').MPChart chartType: 'line',
        highchartsOptions: options
    $lineChart.MPChart 'setData', 'App Load': data
    # Make sure chart is visible
    $appLoad = $('#app-loads')
    $appLoad.removeClass 'hidden' unless not $appLoad.hasClass 'hidden'
    $('.mixpanel-platform-multi_selector').addClass('hidden')
    # Remove the line chart's header
    $lineChartHeader = $('#line-chart .mixpanel-platform-chart_header')
    $lineChartHeader.addClass 'hidden' unless $lineChartHeader.hasClass 'hidden'
    return

hideAppLoadRate = ->
    $appLoad = $('#app-loads')
    $appLoad.addClass 'hidden' unless $monthlyChurn.hasClass 'hidden'
    return

initDatePicker = ->
    # Initialize date picker and define handler for when date range changes
    $datePicker = $('#date-picker').MPDatepicker()
    # Set date picker to today
    $datePicker.val
        from: getFromMoment().toDate()
        to: getToMoment().toDate()
    # Style the date picker
    $datePickerEl = $datePicker.find '.mixpanel-platform-date_picker'
    $datePickerEl.addClass 'mp-date-picker'
    return

datePickerHandler = ->
    $('#date-picker').on 'change', (e, dateRange) ->
        setReportTitle()
        fromMoment = moment dateRange.from
        toMoment = moment dateRange.to
        # Only update report if the date has changed
        if not getFromMoment().isSame(fromMoment) or not getToMoment().isSame(toMoment)
            setFromMoment fromMoment
            setToMoment toMoment
            showLoadingScreen()
            getResults getFromMoment(), getToMoment()
        return
    return

initAppPicker = ->
  
appPickerHandler = ->

initAppTypePicker = ->

appTypePickerHandler = ->



getResults = (from, to) ->
    Promise.all(
        [
            getOrgs from, to
            getAppOrgs from, to
            getNewOrgs from, to
            getUsage from, to
            getRisk()
            getAppLoadTrends from, to, globals.type, globals.app
        ])
    .then (resultsArray) ->
        # Should only happen once
        mauGoal = 15000
        appOrgsGoal = 500
        newOrgsGoal = 100

        # Grab results from array
        # this is where I need to transform the results for the tables, graphs and dials
        mauResults = resultsArray[0][0]
        appOrgsResults = resultsArray[1][0]
        newOrgsResults = resultsArray[2][0]
        usageResults = resultsArray[3][0]
        riskResults = resultsArray[4]
        appLoadsResults = resultsArray[5]

        # Either reduce to a count or get final data set for display
        mau = processNumericData mauResults
        appOrgs = processNumericData appOrgsResults
        newOrgs = processNumericData newOrgsResults
        powerUsers = processUserData usageResults
        atRiskUsers = processRiskData riskResults
        appLoads = processAppLoadData appLoadsResults

        hideLoadingScreen()
        # Set report's title to include date
        setReportTitle()

        # Show results!
        debugger
        showProgress 'unique-orgs', mau.condensedValue(), 0, Math.min Math.floor (mau / mauGoal * 100), 100
        showProgress 'multi-app-orgs', appOrgs.condensedValue(), 250, Math.min Math.floor (appOrgs / appOrgsGoal * 100), 100
        showProgress 'new-orgs', newOrgs.condensedValue(), 500, Math.min Math.floor (newOrgs / newOrgsGoal * 100), 100
        showUsageTable powerUsers
        showRiskTable atRiskUsers
        showAppLoadRate appLoads
        #clear appload rate chart, reload with new data
        trackOnce()
        return
    .catch (error) ->
        # If anything goes wrong, print to console
        console.log 'Failed with following error:', error
        # console.log 'error.request.statusCode:', error.request.statusCode
        return

globals.fromMoment = moment().subtract 29, 'days'
globals.toMoment = moment()
initLoadingScreen()
showLoadingScreen()
initDatePicker()
datePickerHandler()
initAppPicker()
appPickerHandler()
initAppTypePicker()
appTypePickerHandler()
getResults(globals.fromMoment, globals.toMoment)
