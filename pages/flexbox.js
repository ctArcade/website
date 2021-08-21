import Head from 'next/head'
import Image from 'next/image'
import PLink from '../components/PLink'

export default function Flexbox() {
  let urls = [
    "https://lh3.googleusercontent.com/aM5EDQY846nVaTbGGnrf31qQ0EyXoTxMUABIkpr1Qz-MjVEaZpMs_yhJnaTUVS1XEkSm1yzMBInormbZ7ZZu_ClhtgTnSNQ7-FhooP97NFSqaxa0RUgcbl8JVziY9RZE3pZmghosAmGGFLYuAZ9VeYOeJnUs2vEG12NhO9aycx7aJYFdEIgh0934yoNkhcaN_vAnY_rFVXN2gTd7pfQJpQqT07DFz21ajPL0HfSCunDwBO8qDUAaS1PVRMZYjKzC3eAlmfwCLkxwS8X8mhjzXf38hDVfVPfqZAMzVucSaq4Iwhgqx5MhcKX2kMBbGEdQKNl8dgwhLL2ZPXqFFS73iCwrzjk-FCy0ViOpSvsJWJStdXz1CbD8uqHcfDm60ENMSjPAjX99_g6YXp5J4eABqH8Wb5N9ktl2rxOG20e9l7iF-3CwH0Y0dqcSIyORNUw8CKgUV1DbqeCQo1iVldRtd4GOz7w8yy_X3KHR4LQLjhjlekFonYEfBEJqPsTSJ_5drefFUuE02XQeYTGA6awowcApj42AjbWJb581TQDRdkbiuA5Xiq86tDHVlaSR1xK9zjwFTfCV_UffY-KSKwuhByBF7HlIm6JpEUJuBJWs-nT_QMQENELL9YgsoLRKPuVvD_bN_BJ8Pc7BamVaHa5qqI6NV3gbipNIp1Y0Jgdhk4WZRTBjlG7k_RpX3nDB2qmSBJxf4JgfYVGzM2uzfPhCZiuY=w1005-h1340-no?authuser=0",
    "https://cdn1.dotesports.com/wp-content/uploads/2019/10/15202826/b8fbf5b3ce1fca11a1a741ddc49016d7.jpg",
    "https://lh3.googleusercontent.com/aM5EDQY846nVaTbGGnrf31qQ0EyXoTxMUABIkpr1Qz-MjVEaZpMs_yhJnaTUVS1XEkSm1yzMBInormbZ7ZZu_ClhtgTnSNQ7-FhooP97NFSqaxa0RUgcbl8JVziY9RZE3pZmghosAmGGFLYuAZ9VeYOeJnUs2vEG12NhO9aycx7aJYFdEIgh0934yoNkhcaN_vAnY_rFVXN2gTd7pfQJpQqT07DFz21ajPL0HfSCunDwBO8qDUAaS1PVRMZYjKzC3eAlmfwCLkxwS8X8mhjzXf38hDVfVPfqZAMzVucSaq4Iwhgqx5MhcKX2kMBbGEdQKNl8dgwhLL2ZPXqFFS73iCwrzjk-FCy0ViOpSvsJWJStdXz1CbD8uqHcfDm60ENMSjPAjX99_g6YXp5J4eABqH8Wb5N9ktl2rxOG20e9l7iF-3CwH0Y0dqcSIyORNUw8CKgUV1DbqeCQo1iVldRtd4GOz7w8yy_X3KHR4LQLjhjlekFonYEfBEJqPsTSJ_5drefFUuE02XQeYTGA6awowcApj42AjbWJb581TQDRdkbiuA5Xiq86tDHVlaSR1xK9zjwFTfCV_UffY-KSKwuhByBF7HlIm6JpEUJuBJWs-nT_QMQENELL9YgsoLRKPuVvD_bN_BJ8Pc7BamVaHa5qqI6NV3gbipNIp1Y0Jgdhk4WZRTBjlG7k_RpX3nDB2qmSBJxf4JgfYVGzM2uzfPhCZiuY=w1005-h1340-no?authuser=0",
    "https://lh3.googleusercontent.com/JZuZw8j3Tpi7G0Svb1SJahfWuEab5wVRxKzG1q6qtOQYboV7ipXTpGpsOy8pV8hwo32G_8YgZwUbAKPBx98NLVJOmheRmUdcyaFQ8d4zatiF2rH2eI-4HonVkD60tngyhWwbgAIwyixrgsEQ7ckUHB5iBTkGhDgjKkzG7IbMagIs8_1nOzdT94tMndq2kU0fw8uycEj79e00lQNcNlZG-RhTZCnUDizgCqGgpunbQ0QFSSs-hPwZSAVd3cKD1FusyjZN_zWHtVxxyGykoo8HI0_JvFj07S5mEFxP_IrZGdiZIhmNxNlOvgFp9GiKInkjz39T72XdueMnjqw2jmQ-ki8_PYhwMK3D1tcEURrp0C3n5A5zf1DK8JQZX5UFmq0M-tMgJD_D5AKxHVCcQd14rwkCmaDtI_epXtrdzcKtmlDMc4lucasYLnH3wL4MP8v6EUvZMlZTyatFDLsIHgoyluHGP-fk_xSjPAZIhy_vxi0gAdG2_fW15ZmkZEJ5cEsirgzI-6vU9kCUwAdf2aVKxVUJGShQwf5IrHnOQ5u9fm3-QW-8Cd98vCTtiGt6OrhPXHjcqDXnjcK_63UEj20E9T1hNUGqMbGdPJ3sL4Ve5-vWR5H0O6k8c4gkNk1kspvn-SahE9p7k-40WNHrrJi1Vod1X_6JU7ea_qJGbgD3jtGahQPAxEgq5Of7ZdHpBDraP2eXVpQ2JiXRdnKQ6Lpxsqd9=w1004-h1338-no?authuser=0",
  ]

  let cards = urls.map((url, i) => (
    <div className="mx-4" key={i}>
      <Image alt="awww" src={url} width="300" height="300" quality="100" />
    </div>
  ))

  return (
    <div>
      <Head>
        <title>Ct Arcade</title>
        <meta name="description" content="The social platform for your next ct.js game!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full my-11 flex justify-around bg-gray-500">
        {cards}
      </div>

      <div className="w-full flex justify-center">
        <PLink href="/" text="Home" />
      </div>

    </div>
  )
}
