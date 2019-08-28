export default {
  findUpcomingEvents (metro_area_id, options) {
    const { min_date, max_date, per_page } = options || {}
    let url = 'https://api.songkick.com/api/3.0/metro_areas/' + metro_area_id + '/calendar.json?apikey=8NE1zK8cPERqD8IJ'
    if (min_date) url += '&min_date=' + min_date
    if (max_date) url += '&max_date=' + max_date
    if (per_page) url += '&per_page=' + per_page

    return fetch(url).then(response => {
      if (response.status !== 200) return null
      return response.json().then(data => {
        if (data.resultsPage.status !== 'ok') return null
        return data.resultsPage.results.event || []
      })
    })
  }
}