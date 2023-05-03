
import { useRouter } from "next/router";
import Head from "next/head";

const DynamicRoute = ()=>
{
    const router = useRouter();
    const query = router.query.dynamic;
    console.log('query',query);
    return (
        <div>
            <Head>
                <title>{query}</title>
        </Head>
    Hi there i am a Dynamic route :{query}
    </div>
);
}

export default DynamicRoute;