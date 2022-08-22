import {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from 'next';
import ReactHtmlParser from 'react-html-parser';
import { HistoricalChart, SingleCoin } from '../../utils/api';

const CoinPage: NextPage = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const description =
        `${data.description.en.split('. ').slice(0, 2).join('. ')}` + '.';

    console.log(data.description);

    return (
        <>
            <button>1year</button>
            <button>6 months</button>
            <h1 className='text-white'>{data.name}</h1>
            <p className='text-white'>{data.name}</p>
            <p className='text-white'>{data.id}</p>
            <p className='text-white'>{data.sym}</p>
            <p className='text-white'>{data.market_data.current_price.usd}</p>
            <p className='text-white'>{ReactHtmlParser(description)}</p>
            <p className='text-white'>{data.market_cap_rank}</p>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id: any = context.params?.coinId;
    const resCoin = await fetch(SingleCoin(id));
    const dataCoin = await resCoin.json();

    const resHistoCoin = await fetch(HistoricalChart(id));
    const dataHistoCoin = await resHistoCoin.json();

    return {
        props: {
            data: dataCoin,
            dataHisto: dataHistoCoin,
        },
    };
};

export default CoinPage;
