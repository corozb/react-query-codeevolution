# React Query

- Fetch Data
- Loading
- Error Handling
- React Query DevTools
- Cache: request data from cache, default: 5s
- StaleTime: update the data every amount of seconds, default: 0
- refetchOnMount: Automatically refetch data when the components was mount, default: true, values: true, false, 'always'
- refetchOnWindowsFocus: when we are on the view
- Polling: refetchInterval: 2000, refetch data in regulars intervals, in this way always be updated - refetchIntervalInBackground: true, this allow fetch the data while we are not in the browser
- onClick={refetch}: enable request just when we click for that, enabled: false
