import { NextPage } from 'next';
import { urlGeko } from '../../utils';

const CoinPage: NextPage = ({ coin }: any) => {
    console.log(coin.id);
    return (
        <div>
            <h1>{coin.coin_id}</h1>
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(urlGeko);
    const data = await res.json();

    return {
        paths: data.map((coin: any) => {
            return { params: { id: String(coin.id) } };
        }),
        fallback: false,
    };
};

export const getStaticProps = async ({
    params,
}: {
    params: { id: String };
}) => {
    const res = await fetch(`${urlGeko}/${params.id}`);
    const coin = await res.json();
    return {
        props: {
            coin,
        },
    };
};

export default CoinPage;
