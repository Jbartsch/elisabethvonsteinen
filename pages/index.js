import Head from "next/head";
import Image from "next/image";
import Profile from "../components/profile";
export default function Home() {
  return (
    <>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            <h2 className="text-base text-gray-900 font-semibold tracking-wide uppercase">
              Elisabeth von Steinen
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Zerrissene Zeit
            </h3>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="/cover.jpeg"
                      alt="Buchcover Zerrissene Zeit"
                      width={375}
                      height={600}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <span className="ml-2">
                      Bild Schloss (Pastellkreiden auf Karton): Josef Müller
                      (1886-1964) Mels <br />
                      Foto Schloss: © Mike Kieme, Elikya Images
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 font-serif">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-700">
                  In diesem spannenden Roman mit Mystery-Elementen erkundet die
                  mutige Eva auf ihren einsamen Streifzügen die Herkunft ihrer
                  schüchternen Freundin Johanna. Dabei begegnet sie urwüchsigen
                  Sagengestalten aus längst vergangenen Zeiten. Um den wahren
                  Kern von Johannas Geschichte aufzuspüren, schlüpft Eva in
                  einem leerstehenden, geheimnisvollen Haus durch den Riss in
                  der Zeit. Johanna verliert durch ihre Rückzüge in ihr bewegtes
                  Innenleben zunehmend den Bezug zur Realität. Erst nach Evas
                  Verschwinden rafft sie sich auf und reist auf den Spuren ihrer
                  Geschichte nach Leipzig, wo sie den Musiker Anton trifft. Er
                  konfrontiert Johanna mit der Wirklichkeit und schenkt ihr die
                  Geschichte einer grossen Freundschaft.
                </p>
                <a
                  className="my-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  href="https://www.orellfuessli.ch/shop/home/artikeldetails/ID148073652.html"
                >
                  eBook Kaufen
                </a>
              </div>
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
