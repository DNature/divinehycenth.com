// @ts-nocheck
import React from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import { useScrollHandler } from "../../components/useScrollHandler";

const Index = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const scroll = useScrollHandler();

  return (
    <div className="">
      <header className="bg-gradient fixed top-0 w-full z-10" scroll={scroll}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-6 py-6">
            <span className="text-white">Divine Hycenth</span>

            <nav className="hidden sm:flex justify-between">
              <span className="px-4 text-white">Home</span>
              <span className="px-4 text-white">About</span>
              <span className="px-4 text-white">Blog</span>
              <span className="px-4 text-white">Projects</span>
              <span className="px-4 text-white">Contact</span>
            </nav>

            <button className="sm:hidden" onClick={(): void => setOpen(!open)}>
              <FiAlignRight className="text-white text-3xl" />
            </button>

            <div
              className={`bg-gradient absolute top-0 left-0 w-screen h-screen sm:hidden`}
              style={{
                transform: open ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 0.25s ease-in-out"
              }}
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-25">
                <span className="text-white">Divine Hycenth</span>
                <button onClick={(): void => setOpen(!open)}>
                  <FiX className="text-white text-3xl" />
                </button>
              </div>
              <nav className="">
                <div className="px-4 text-white">Home</div>
                <div className="px-4 text-white">About</div>
                <div className="px-4 text-white">Blog</div>
                <div className="px-4 text-white">Projects</div>
                <div className="px-4 text-white">Contact</div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut
        velit suscipit eos ipsam molestias possimus cumque vel blanditiis.
        Aliquam, quos aperiam! Dolorem explicabo dolore voluptas quod pariatur
        odio deserunt vel nam corrupti eligendi, accusamus eius quas aliquid,
        harum exercitationem officiis facilis, consequatur veritatis quasi qui.
        Molestias ullam nesciunt pariatur magnam nisi soluta magni deleniti fuga
        quasi odio at, earum fugiat veritatis commodi maxime consectetur nam
        totam consequatur atque doloremque! Autem, odio. Iste vitae esse
        obcaecati corrupti neque doloremque dignissimos voluptatum deleniti sunt
        eveniet non veniam exercitationem perferendis molestiae sint aliquam
        nihil, quam deserunt odit praesentium at eligendi ullam. Voluptatibus
        soluta ex officiis expedita blanditiis accusamus veniam nam, voluptas
        corporis aperiam illo beatae cupiditate fuga, nisi ullam? Fuga non, rem
        voluptatibus corporis accusamus quasi laborum architecto sed reiciendis
        ipsam dolore quas molestiae. Ad et consequatur laborum quae nam maiores
        quia dolores nulla ducimus distinctio inventore hic, totam debitis
        voluptatum sunt accusantium rerum cupiditate fugit eos ipsa. Delectus
        libero magni officia vel perferendis ut perspiciatis illo accusantium ea
        beatae corrupti, neque repudiandae ullam minus iusto, repellat odio
        praesentium eos nihil, aspernatur asperiores illum explicabo.
        Consequuntur impedit, maiores fugit rerum voluptate, omnis animi,
        tempore aut laboriosam id vel laborum porro facere assumenda totam
        dolores soluta fuga consectetur fugiat quidem voluptates quasi?
        Recusandae numquam quia omnis ut quas adipisci, doloremque quos eum nam
        nostrum eius ducimus beatae neque illo, odio laborum, qui assumenda
        minima ea eveniet dolore incidunt non sequi doloribus! Sapiente, ex odio
        et ad delectus consequatur mollitia temporibus vitae sit explicabo
        doloribus dolores! Rem commodi eum at dolorem nisi aliquid assumenda
        autem ea sed quam consequuntur nulla voluptatum voluptate, quos eius
        delectus earum inventore porro ipsam eligendi suscipit blanditiis vel.
        Ipsa, mollitia. Nesciunt tempora numquam in asperiores adipisci sint
        veniam! Est totam id consectetur harum cumque saepe optio fugit
        assumenda nisi voluptates cum eaque minus, sapiente voluptas.
        Accusantium, dolor exercitationem blanditiis quibusdam quasi sequi porro
        atque ipsum quaerat. At, dolor dolore, possimus illum qui facilis cum
        vero in pariatur dicta officia ratione. Doloribus nisi, beatae adipisci
        dignissimos vel repellat quam, architecto quo, iste repudiandae nemo
        voluptatem a id quae necessitatibus odit mollitia. Adipisci tempora,
        blanditiis quia cumque quisquam culpa illo necessitatibus libero
        distinctio fuga debitis provident soluta eos rem eligendi ea. Omnis,
        dicta laborum perferendis cumque nisi recusandae unde officiis libero
        ipsa dignissimos excepturi. Doloremque explicabo itaque, tenetur
        numquam, in non inventore, quibusdam iure reprehenderit voluptates
        molestias? Nesciunt sunt modi earum voluptates fugit maiores perferendis
        eligendi non minus deleniti, quas molestias, sit quos. Quasi ullam
        nesciunt obcaecati hic earum a vitae ut quidem quisquam voluptatibus
        fuga harum illum sequi debitis molestias assumenda maiores est maxime
        non libero quas, accusantium placeat quo? Ipsa nihil, atque unde libero
        quod, optio fugiat nam consectetur totam, eveniet aspernatur est
        asperiores. Quae ab odit ducimus veniam unde repellendus porro velit,
        ipsa, rerum adipisci quo vero esse alias. Necessitatibus temporibus
        reprehenderit omnis ullam perferendis quas suscipit dolore esse, magnam
        culpa, vero corrupti. Dignissimos, laborum dolores cum voluptates, amet
        dolorum vel sapiente maiores nostrum dicta deleniti illum doloribus
        fugiat tempore, aliquid rem aspernatur ad. Voluptatum architecto minus
        quo ea quas sequi nostrum ipsa, aliquid minima ut dolorem vel quasi
        veritatis delectus nihil itaque expedita doloremque laudantium eveniet
        aliquam illo? Non voluptatem possimus corrupti nulla qui, ab fuga sint
        minima aspernatur obcaecati dicta repudiandae dolorem perferendis
        provident, vitae quo quasi, nihil neque dolore laboriosam ipsum eius
        quia distinctio. Praesentium ut iusto error assumenda modi enim velit
        perferendis natus. Maxime dolore consectetur optio aliquid voluptates
        accusantium aperiam, deleniti ipsam pariatur, sequi culpa magni vel
        fugiat totam accusamus? Ipsum deserunt ad magnam quos voluptatibus
        dolores quisquam adipisci autem architecto rem recusandae obcaecati odit
        nihil, quis magni quo, pariatur laboriosam cum sequi? Fugiat, iusto
        tenetur voluptatum doloremque suscipit repellat explicabo quas ipsam,
        inventore, accusamus vitae expedita illo voluptates eaque necessitatibus
        obcaecati eveniet et ad! Facilis nisi sit sunt id magni repellendus, ab
        totam odio. Culpa numquam quaerat rem velit unde necessitatibus porro
        officiis accusantium. Sed dignissimos ut quia? Nisi ipsam molestiae
        commodi. Nesciunt est commodi cupiditate quibusdam amet quod! Temporibus
        accusantium sunt eum dolorem tenetur? Debitis laborum qui culpa
        excepturi a impedit nam quia fuga, dolore iusto numquam dolores.
        Accusantium numquam, cupiditate sapiente temporibus est dolorem.
        Tenetur, dolorem. Necessitatibus labore voluptates vitae accusamus
        voluptate itaque nemo aspernatur in! Suscipit iusto necessitatibus
        voluptas culpa id. Sed sint quae illum! Cumque et libero ipsam quis odit
        aperiam provident quisquam adipisci fuga, magnam quidem hic corporis eos
        quae sunt totam minus expedita ducimus. Sequi aliquam eos, explicabo
        tempora id totam eius. Porro optio sequi impedit veritatis earum enim
        dolor vitae aperiam. Voluptatum, sit nisi. Animi quia, voluptatibus hic
        minima ipsum est numquam. Possimus laborum provident est sit
        reprehenderit deserunt animi optio laboriosam ullam aliquam harum
        reiciendis consequatur, eius exercitationem atque autem doloremque
        commodi assumenda fugiat praesentium nemo delectus porro voluptatibus.
        Distinctio laborum voluptate cumque excepturi, voluptas repellendus
        soluta cum illum nam, quis consequatur culpa, tenetur incidunt? Ratione
        possimus, sed porro nam quam, ullam corporis id earum vel nulla, sunt
        non! Excepturi, ratione inventore amet sequi laborum asperiores debitis
        nam quisquam animi beatae nisi recusandae, ullam aut eaque veniam neque
        tempora at obcaecati repellat, dolorem labore eligendi esse dolores.
        Asperiores esse possimus ab deserunt debitis harum culpa dolores, dolore
        aliquam dicta eius, rem nesciunt id, exercitationem quidem iure fugiat.
        Optio quae fugiat ea voluptatem eaque quia facere a voluptates!
        Consectetur culpa cumque similique minima magnam tenetur hic omnis odit
        itaque fugit? Exercitationem quod et quibusdam blanditiis nostrum
        distinctio, ut saepe adipisci! Et quisquam qui libero. Quos, alias!
        Molestiae corrupti commodi non explicabo cupiditate architecto porro ab
        error in quia eos soluta nostrum magni natus ipsam atque, reprehenderit
        dicta. Necessitatibus praesentium deserunt sunt rerum dolores, enim
        impedit illo voluptatibus itaque dolorum tempore sapiente nisi, sequi
        eveniet quam neque sint laboriosam exercitationem. Quidem cumque commodi
        fugit tenetur id, at a temporibus cum nobis, totam minima quasi illum,
        illo dolorum ullam similique perspiciatis praesentium iste ipsam
        pariatur? Error asperiores et ex omnis, libero suscipit est alias
        officia aspernatur inventore facere, eveniet laudantium eligendi veniam
        illo recusandae atque? Dolore quae, tempore mollitia quia enim debitis
        accusamus sequi! Voluptates dolor nostrum labore laudantium eum sunt
        dolorum animi. Totam error enim perspiciatis, sit ipsam suscipit?
        Molestias magnam adipisci praesentium nulla tenetur ut, saepe dicta
        veniam repellat facilis totam iusto consequuntur non sit qui soluta
        quisquam eligendi alias, tempore vitae rem. Error id blanditiis
        repellendus, ex eos quis voluptates architecto atque deleniti, libero
        sit repellat minus autem quae a eius deserunt explicabo. Quae officiis
        nostrum quod quasi ipsum perspiciatis, vitae, sapiente consectetur quia
        dolorum repudiandae? Recusandae corrupti doloribus necessitatibus
        voluptas amet! Aut magnam numquam aliquam tenetur suscipit! Et placeat
        aliquam repudiandae, vero molestiae, aperiam non dolor harum labore
        sequi id. Assumenda sapiente cum, quia distinctio voluptas repellendus
        officiis modi, quisquam autem ipsa quidem quis asperiores. Molestiae
        optio velit alias sed. Ipsum nemo vel molestias, nostrum, laudantium
        recusandae hic illum distinctio debitis necessitatibus ex maxime aliquid
        doloribus, autem tempore aut atque ad reprehenderit inventore assumenda
        perspiciatis velit itaque iste? Neque consectetur blanditiis pariatur
        corrupti molestiae necessitatibus quia quasi reprehenderit cumque a
        culpa veniam laudantium vero, adipisci voluptate commodi quae optio?
        Consectetur excepturi porro repudiandae quia quo dolorum natus suscipit
        asperiores, distinctio inventore, minus esse numquam aperiam
        consequuntur? Aliquid, minus hic veritatis laudantium necessitatibus
        voluptatum nihil ex atque explicabo at ab quo distinctio voluptatibus
        ducimus, odio a maxime enim voluptatem laborum quasi iure id repellat
        dolor. Maiores voluptates delectus quis autem fugit possimus expedita
        rerum magnam quisquam explicabo suscipit velit nihil dolorum iure aut
        numquam saepe incidunt error vitae, veniam ut illum asperiores dicta!
        Facilis omnis blanditiis numquam deserunt magnam non iure aut? Optio
        voluptatum incidunt doloribus dignissimos, modi veritatis, excepturi
        quaerat neque ipsam cumque dolorem similique facilis? Odio voluptas
        natus sit earum rerum sed, libero animi, dignissimos veniam at
        reprehenderit itaque, ipsam asperiores iste explicabo. Repellat
        asperiores rerum obcaecati temporibus necessitatibus nam esse sequi
        aliquam voluptatem at, facere voluptatibus eius alias consequatur,
        itaque quam suscipit illo laborum labore libero repellendus. Vel dolor,
        numquam magnam, a nostrum odit recusandae veritatis maxime dolorum
        alias, soluta dolores laboriosam temporibus? Praesentium, aspernatur.
        Sunt explicabo mollitia reiciendis fugiat, praesentium, aperiam
        voluptates cumque temporibus veniam voluptatum ipsa? Provident ducimus
        blanditiis, tempora eum modi molestiae accusamus distinctio tenetur
        error ex nemo ut nisi, eos debitis. In voluptates necessitatibus iste
        quia quisquam quaerat maxime recusandae. Blanditiis tempore totam odio.
        Accusantium vero est corporis, ducimus quae deserunt natus eos animi
        debitis dicta maxime. Laudantium voluptates rem modi, eum, cum laborum
        ex porro velit beatae tenetur cumque a! Deleniti ea quasi temporibus ad
        vero similique, maiores dicta commodi aut praesentium? Officiis facere
        blanditiis ipsa natus neque nisi placeat eum hic velit itaque possimus
        aspernatur expedita temporibus vel numquam sit ratione, ad amet culpa
        sed modi incidunt reiciendis. Aspernatur eum accusamus quisquam quasi.
        Aspernatur a dolores adipisci vero eum tempora, pariatur officia
        incidunt facere quis esse, voluptas quisquam at voluptate fuga, aperiam
        eaque eligendi! Tempore provident accusamus sapiente eaque quod iste
        explicabo debitis tempora, veniam expedita veritatis laudantium.
        Voluptas odio dolorum earum id neque ipsum totam ipsam consequuntur
        atque deleniti cumque temporibus tenetur ratione non quod reiciendis
        maxime aspernatur ea unde sequi voluptate iusto, alias, quasi dolores.
        Magni est ipsam, sint repudiandae modi possimus ab vitae deserunt illo,
        perferendis, porro aperiam culpa suscipit quae ex eligendi quisquam
        fugiat quidem! Sed architecto voluptatibus quas autem nobis accusantium?
        Debitis eius recusandae atque cum voluptate veritatis, iure, harum nobis
        aliquid eveniet, quae natus explicabo. Non recusandae sequi est quas
        cumque soluta corporis voluptatum excepturi fugiat officiis, consectetur
        dignissimos ab architecto incidunt quidem cum esse dolore illo? Vero
        omnis quod aliquam numquam quos architecto veniam optio velit dolorem
        porro perspiciatis impedit tempore, delectus repellat laboriosam eius
        itaque ea dolor iusto vel commodi totam ex voluptate doloremque! Commodi
        vero amet reprehenderit adipisci modi eaque et odio aspernatur, esse
        accusantium aliquam, mollitia praesentium cum rerum pariatur est ipsum
        libero fugit tempore dolore earum natus dignissimos a ut. Nostrum et
        vero, dolor saepe, ab modi unde quo dolorem quisquam doloribus nisi ut
        quaerat blanditiis, doloremque veritatis aliquid error placeat illo
        neque. Inventore quis quod est rerum assumenda ab, culpa maxime eum
        necessitatibus qui repellat ea amet cupiditate eos hic? Quos natus
        dolorem doloribus culpa deserunt dignissimos neque tenetur aliquid est
        exercitationem sed alias, quisquam cumque rerum iste cupiditate ex?
        Eligendi suscipit vitae, molestias commodi veritatis unde repellat
        voluptatibus architecto vel numquam id deleniti nihil tempora hic
        praesentium ab expedita eius. Quibusdam vero quia adipisci harum
        excepturi vitae! Assumenda magnam at nisi nobis hic sint dicta ea. Sed
        maiores sint officia necessitatibus amet excepturi doloribus dolore
        eligendi quo vel, facere architecto asperiores at accusamus deleniti
        quaerat debitis magnam atque, blanditiis modi? Officia voluptates vero,
        at velit veritatis numquam repellendus rem sapiente quae, dignissimos
        accusantium ratione harum, commodi rerum minus. Qui voluptates nobis
        perferendis saepe dolores quia iste tempore voluptatibus nulla
        inventore? Libero ad tenetur dolorum distinctio ab totam ipsam a
        eligendi veniam. Officia ex totam, fugit et eius praesentium aut! Natus
        consequuntur alias neque, nemo quod voluptate illum voluptates vel ab?
        Fuga perferendis cum labore officia. Error incidunt soluta accusantium
        qui earum numquam quod non perferendis fuga provident nemo recusandae
        beatae unde, voluptate suscipit esse? Deserunt quod a nihil animi non.
        Error, repudiandae blanditiis. Beatae, error laborum reprehenderit ut
        vitae cupiditate provident blanditiis vero tempora totam perferendis
        quisquam enim laudantium autem perspiciatis eos eligendi nemo culpa sunt
        tenetur tempore officiis praesentium? Tempora doloribus fuga repudiandae
        amet voluptas reprehenderit facilis sit officia totam aspernatur fugit
        nostrum cumque, ipsum error minima accusamus temporibus provident alias
        quo velit nulla laboriosam. Maxime ipsam tenetur non voluptates porro
        libero itaque explicabo minus! Minus sunt obcaecati asperiores modi unde
        sint itaque dolorem doloremque voluptates repudiandae necessitatibus
        possimus molestiae, deserunt ratione aperiam ullam voluptatibus!
        Perferendis quas nisi, voluptates repellat fuga a illum cupiditate
        mollitia incidunt, eveniet accusamus aut adipisci consequuntur
        obcaecati? Similique consequatur ea explicabo ipsa velit voluptatem quia
        corporis, molestiae assumenda, hic modi sed laborum quae exercitationem
        vero accusamus, voluptates dolor iusto adipisci incidunt earum at
        molestias corrupti id. Minima officiis cum a inventore! Blanditiis
        aliquid eos quaerat sapiente labore beatae, quam quod, natus nisi quasi,
        in sed suscipit?
      </div>
    </div>
  );
};

export default Index;
