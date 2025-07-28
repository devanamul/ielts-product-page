import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { fetchProduct } from '../../utils/api';
import { ProductData } from '../../types/product';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Trailer from '../../components/Trailer';
import Instructors from '../../components/Instructors';
import Features from '../../components/Features';
import Checklist from '../../components/Checklist';
import CTA from '../../components/CTA';
import Learn from '../../components/Learn';
import Exclusive from "../../components/Exclusive";
import Details from '../../components/Details';

type Props = {
  product: ProductData;
  lang: string;
};

export default function Home({ product, lang }: Props) {
  const { title, description, media, sections, checklist, cta_text } = product;

  return (
      <>
        <Head>
          <title>{product.seo?.title || 'IELTS Course'}</title>
          <meta name="description" content={product.seo?.description || ''} />
        </Head>

        <Layout lang={lang}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-2.5">
              <Hero title={title} description={description} />
              <Instructors sections={sections} />
              <Features sections={sections} />

              <Learn sections={sections} type="pointers" />
              <Exclusive sections={sections} />
              <Learn sections={sections} type="details" />

              <Details sections={sections} type="about" />

            </div>

            <div className="space-y-2.5">
              {media?.length > 0 && <Trailer media={media} />}
              {cta_text && <CTA cta={cta_text} />}
              {checklist && checklist.length > 0 && <Checklist checklist={checklist} />}
            </div>
          </div>
        </Layout>
      </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.query.lang === 'bn' ? 'bn' : 'en';

  try {
    const product = await fetchProduct(lang);

    return {
      props: {
        product,
        lang,
      },
    };
  } catch (error) {
    console.error('API error:', error);
    return {
      notFound: true,
    };
  }
};
