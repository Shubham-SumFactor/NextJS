section 11

## SWR with CSR
>
## Voting feature Design
> 
## Coffee Store Bt Id API 
>
## Coffee Store by Id API Validation
>
## Refactor Coffee Store By Id API
>
## SWR => React Hooks Lib for data fetching. => Stale-while-revalidate
> npm install swr
>
> const { data, error } = useSWR(`/api/getCoffeeStoreById?id=${id}`, fetcher);
>
>export const fetcher = (url) => fetch(url).then((res) => res.json());

