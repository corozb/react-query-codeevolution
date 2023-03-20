# React Query

[YouTube Playlist](https://www.youtube.com/watch?v=VtWkSCZX0Ec&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=1&ab_channel=Codevolution)

[Repo](https://github.com/gopinav/React-Query-Tutorials/tree/master/react-query-demo)

- Fetch Data
- Loading
- Error Handling
- React Query DevTools
- Retry: How many time we gonna search for data in query
- Cache: request data from cache, default: 5s
- StaleTime: update the data every amount of seconds, default: 0
- refetchOnMount: Automatically refetch data when the components was mount, default: true, values: true, false, 'always'
- refetchOnWindowsFocus: when we are on the view
- Polling: refetchInterval: 2000, refetch data in regulars intervals, in this way always be updated - refetchIntervalInBackground: true, this allow fetch the data while we are not in the browser
- onClick={refetch}: enable request just when we click for that, enabled: false
- Success and Error Callbacks
- Data Transformation
- Custom Query Hooks
- Query By Id
- Parallel Queries
- Dynamic Parallel Queries: useQueries
- Dependent Queries
- initial Data: to caché queries
- Pagination, keepPreviousData: true
- Mutations:
  - useMutation
  - Query Invalidation: To update the data inmediatly the request was do it
  - Handling mutation response
  - Optimistic Updates: Peforming a mutation under the assumption that nothing can go wrong
- Axios Interceptor

<img width="1233" alt="Screenshot 2023-03-20 at 9 21 24 AM" src="https://user-images.githubusercontent.com/37992878/226369593-926b0744-5d1c-4b3e-a9e7-ec3f05503edc.png">


