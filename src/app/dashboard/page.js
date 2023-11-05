"use client";

import React, { useEffect } from "react";
import { Button } from "../components/Button";
import { signOut, useSession } from "next-auth/react";
import CreateNotes from "../components/CreateNotes";
import { useAddNotesStore, useUserStore } from "../store";

const Dashboard = () => {

  const { session, data } = useSession();



  

   // Accessing State
   const [isOpen, setIsOpen] = useAddNotesStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const [username, setUsername] = useUserStore((state) => [
    state.username,
    state.setUsername,
  ]);



 


  return (
    <div className="padding">
      {isOpen && <CreateNotes /> }

      <div className="flex items-center justify-center space-x-4">
        <span>Welcome {username}</span>

        <Button onClick={() => signOut()}>Log Out</Button>

        <Button onClick={() => setIsOpen(true)}>+</Button>
      </div>

      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita
        optio in minima natus incidunt, vitae, magnam voluptas repudiandae,
        consectetur porro dicta eveniet quibusdam adipisci consequuntur iure
        harum corporis aspernatur! Reprehenderit, impedit molestias ullam natus
        quaerat dolores. Quasi, qui. Suscipit accusantium molestias iste aliquam
        ducimus sint, ipsum inventore molestiae quisquam, debitis cumque vero
        deserunt quod, dolore nulla dolor officia possimus? Magnam
        exercitationem tempora reprehenderit deserunt ipsa eum maxime culpa
        optio temporibus illum debitis adipisci consectetur expedita accusamus
        nisi dolor doloribus tenetur, sapiente veniam totam? Reprehenderit
        corporis iste dolores facilis amet? Aliquid ipsa consectetur iure
        facilis earum, quam incidunt nobis vel hic excepturi expedita! Aut nemo
        cumque dolores doloremque est, vel amet molestiae, totam aliquid beatae
        repellendus hic eligendi officiis ipsa? Autem, praesentium. Cum optio
        voluptate fuga excepturi nostrum debitis, animi laborum quia hic
        asperiores. Asperiores possimus corrupti facilis ex, atque laboriosam
        adipisci, nam alias inventore quo quibusdam! Eius, porro exercitationem!
        Ipsam quam, facilis accusantium vero eius ab suscipit optio unde natus,
        eveniet non tenetur quisquam obcaecati fugit, eos harum voluptatibus
        laudantium a inventore aliquam similique sequi ducimus sapiente? Sit,
        accusantium! Expedita tempore dolore ducimus error laboriosam officiis
        deserunt veritatis quibusdam, repudiandae voluptate exercitationem
        delectus tempora quis aperiam perspiciatis rem mollitia corrupti
        laudantium excepturi corporis rerum eveniet sunt libero culpa? Quidem.
        Distinctio, est! Quia quos veniam voluptate quibusdam fugiat fugit quae
        dolores nam molestias, dicta, eum magnam, minima ad totam cupiditate
        illum odit sapiente! Cupiditate reiciendis quas dolor ipsam dignissimos
        qui. Fuga corporis doloribus totam harum labore ratione quisquam
        obcaecati ullam ipsum numquam eveniet at, tenetur et placeat sunt
        veritatis laborum molestias. Quibusdam quaerat a dolorem ipsum iste
        quidem repellat ratione? Mollitia dicta eum suscipit minima praesentium
        nesciunt perspiciatis reiciendis quis repellendus consequuntur, officia
        repellat. Architecto pariatur soluta voluptates iusto aperiam unde
        exercitationem quisquam, est dignissimos neque corrupti, amet nostrum
        magnam. Corporis saepe provident commodi deserunt earum maxime facilis
        dolore, non minus. Incidunt, eligendi minima? Et mollitia dolor magni,
        voluptas aut natus provident facilis debitis cupiditate accusantium at
        deserunt odio eos! Maxime saepe ullam tempore aspernatur accusantium
        ratione ut laborum! Explicabo veniam repellat totam illum distinctio
        harum quod aut unde repellendus adipisci aliquam voluptate, autem
        impedit odio esse debitis numquam dicta! Dolorum tenetur dolores
        excepturi sapiente nisi, nemo nobis illum sed minus qui vel aliquid
        consequuntur optio ipsam similique alias facere aliquam culpa! Itaque
        dolorum voluptate vitae ea necessitatibus molestias iste. Beatae eius
        nesciunt amet delectus incidunt deserunt? Architecto aliquam consectetur
        non numquam iusto fuga nesciunt nam mollitia corrupti necessitatibus
        harum nihil, nobis ut vitae laborum sit quis iure et recusandae?
        Voluptas expedita nesciunt in repellendus. Accusamus corporis aspernatur
        exercitationem molestias quas fuga sapiente similique nihil enim
        possimus! Rem tempora nesciunt harum ab consequatur dolore quo pariatur
        doloremque libero? Ut, tempore. Nihil delectus nam facilis eius possimus
        suscipit exercitationem, ipsum officia earum non libero ea dolorum culpa
        quibusdam veritatis sit repellendus at laudantium fugit, corrupti error
        voluptatibus tempore. Tempora, aliquid necessitatibus! Nam dolorem ipsam
        vero ab possimus deleniti quam eum distinctio earum nesciunt omnis
        accusamus alias consequuntur est corrupti voluptatibus nulla, illum
        quisquam nemo quod deserunt aliquam! Deserunt dolorem magni debitis.
        Blanditiis nesciunt qui aut omnis esse dolores debitis, perferendis quis
        magnam possimus libero, similique dicta consectetur facilis veniam. Hic
        sed ut rem ratione tempora odit nisi molestiae cupiditate fuga amet?
        Repudiandae quas illo voluptatem, ipsam id sed exercitationem ipsum.
        Debitis dolores optio temporibus nihil dignissimos similique voluptates,
        autem obcaecati culpa at, illum error praesentium ab beatae deserunt
        aliquid natus in. Dicta ab molestias esse, eaque ex laboriosam? Nihil
        aliquam maxime sequi mollitia cupiditate tenetur veritatis impedit
        corporis eos, debitis, perferendis porro molestias? Laborum assumenda
        voluptatibus laboriosam corporis distinctio, excepturi qui? Cumque rem
        eius veritatis quam consequuntur dignissimos quisquam iste placeat et.
        Veritatis iste tempora, voluptatum velit, porro expedita illum quidem,
        eaque alias labore pariatur? Quam sed quaerat neque eveniet aliquid!
        Quibusdam corporis cum iste quia soluta, qui magni possimus sequi
        sapiente ratione illum asperiores ipsam sit molestias natus reiciendis
        veniam aspernatur. Omnis facere soluta eligendi at ratione. Nobis, in
        facilis. Quas atque corporis blanditiis excepturi porro ex debitis
        labore, culpa possimus sapiente voluptas voluptate pariatur officiis
        accusantium officia quaerat natus placeat iste quod ipsum consequuntur
        temporibus. Voluptatibus debitis dicta saepe. Dolorem itaque eos eaque
        repellat. Optio reprehenderit sequi numquam, dicta labore non veniam ea
        saepe molestias praesentium a voluptates similique quidem exercitationem
        perferendis molestiae laboriosam cumque enim! Dolore, autem nihil.
        Ratione soluta libero provident minima vero quod, repellat saepe. Optio,
        nam saepe laudantium iure, reiciendis, adipisci similique omnis placeat
        labore eveniet voluptates impedit numquam odit in soluta quaerat vel
        tempora! Nam dolorem quia aliquid inventore laudantium voluptates,
        voluptatem debitis rerum illum nobis odio, eveniet tenetur dicta sunt
        harum dolore temporibus quaerat eligendi. Fuga facere mollitia earum
        repellat ea consequatur! Voluptate. Qui debitis dolor, veniam doloribus
        totam aliquid ducimus obcaecati. Maxime eligendi blanditiis consectetur
        aut, officiis cumque placeat itaque dolores, eos obcaecati expedita
        perspiciatis et voluptate? Eos totam recusandae suscipit ipsam? Tempore
        repellendus vel fuga facere autem aliquam, doloribus nulla ad tenetur
        molestias consequatur odio quam error voluptatibus fugit eaque magni rem
        perferendis tempora! Qui voluptate, ducimus exercitationem hic rerum
        incidunt! Beatae soluta iure quo, perferendis pariatur sequi nemo
        quaerat ratione quia delectus doloremque dolore dolores nisi facilis
        harum eos! Voluptatem provident dolores labore laudantium ut deserunt
        reprehenderit quos velit at. Et tempora enim magnam, ut quasi dolorem.
        Expedita exercitationem accusamus natus blanditiis provident eligendi
        similique, consectetur quibusdam necessitatibus aliquam laudantium rerum
        nesciunt repudiandae quae, eaque temporibus illo amet atque ullam. Eos
        maiores assumenda commodi expedita, doloremque facilis molestiae tenetur
        consequatur rem, ratione maxime nihil vel magnam incidunt. Eos
        cupiditate quibusdam illo, culpa, cumque nesciunt excepturi porro velit
        suscipit ut numquam! Incidunt recusandae, dolore corrupti consequatur
        libero vel nobis cumque ad quidem, id, rerum alias adipisci sed esse
        perspiciatis exercitationem repudiandae nostrum dolorem. Consectetur
        maxime corrupti provident exercitationem ipsa, ullam sit. Sed
        repudiandae mollitia, fugiat ipsa, unde numquam deleniti voluptates
        quidem nemo magni illum veritatis, porro laborum autem neque quisquam
        cum in error. Quae inventore delectus repellendus distinctio, laboriosam
        eum quaerat. Iste, illo dolores ducimus, aut facere magnam earum, ipsum
        deleniti quaerat veritatis nihil aliquam sunt debitis fugiat recusandae
        non nam autem dolorum nulla? Sequi, cumque non aut molestiae velit
        eligendi? Est ea illum quod eos eum? Ipsum, ut! Doloremque consectetur
        esse repellendus at quibusdam error excepturi molestiae earum sint
        voluptates? Eos, saepe porro eius dolor enim incidunt architecto ab
        possimus. Esse vero consequuntur corporis voluptate ipsam iusto
        repellendus voluptas perspiciatis excepturi, magni facere quidem
        delectus provident aliquid odit aspernatur mollitia itaque at dolor!
        Maiores quidem, vitae eaque possimus repellendus harum. Minus dolores
        rerum dolore qui earum tempora eius aut libero dicta. Excepturi nisi est
        quo, aliquid necessitatibus perferendis repudiandae expedita eveniet
        cupiditate numquam deleniti vel quas rem? Tempore, nobis facere! In,
        aspernatur! Amet quo, a quia quibusdam excepturi eius quae perspiciatis
        sed, cum ipsam, omnis odio natus exercitationem. Amet earum impedit
        perspiciatis labore, rerum possimus reiciendis neque quam facere
        voluptas. Nisi temporibus ipsum eligendi veritatis nostrum id facere
        harum quibusdam inventore expedita. Voluptas beatae similique eligendi,
        ipsam nihil sit asperiores ducimus explicabo labore voluptatem sapiente
        rerum dolorem praesentium accusamus voluptate. Ipsam ex debitis cum
        fugit corporis, beatae ullam nobis excepturi repellendus numquam
        possimus esse, modi dicta quo fuga. Doloremque praesentium odio ipsam
        libero ab nesciunt expedita nulla soluta quidem assumenda? Nisi nesciunt
        dolorum harum dolor, ab modi fugit incidunt explicabo voluptatem, facere
        perferendis vel ratione eaque accusantium amet alias earum ex pariatur.
        Eum dignissimos nostrum rem magnam suscipit placeat ex. Sunt in
        voluptate praesentium architecto dolore distinctio et nam possimus odio
        nostrum, atque eligendi tempore laborum neque suscipit ipsam, nulla
        molestiae labore deserunt, officiis molestias ex beatae totam? Officiis,
        voluptate. Error vitae ipsam architecto, ab dignissimos sequi nemo
        maiores ex reiciendis aut minima aliquam neque ipsum dicta odit suscipit
        id delectus soluta mollitia officiis voluptatibus. Esse libero nostrum
        recusandae in. Corporis repudiandae quis nostrum perspiciatis quia nihil
        architecto vero culpa ab nobis, quo cupiditate? Commodi odio
        exercitationem nesciunt fugit, praesentium dolorem modi, fugiat
        excepturi alias eos ab voluptatibus quae placeat! Impedit iusto eaque
        animi vero. Aliquam laboriosam debitis quaerat necessitatibus, quam
        laudantium incidunt, quia obcaecati, dolores molestiae veritatis
        molestias nemo minima nihil mollitia blanditiis fugit fuga rem similique
        cum ab? Culpa assumenda distinctio qui deleniti nihil similique dolores
        numquam vel id consectetur quod quia, autem sequi consequatur quaerat
        quos dicta nam necessitatibus voluptate impedit. Omnis labore aspernatur
        facilis natus error. Similique voluptas, laboriosam, ipsa cupiditate ea
        accusamus, animi corrupti libero rerum esse beatae sapiente nulla quasi
        tempore eaque error molestias laudantium illum rem officia odio tempora
        possimus eveniet? Nostrum, amet? Adipisci beatae, doloribus incidunt
        impedit quia dolorum eligendi alias blanditiis molestias minima
        excepturi possimus culpa quisquam pariatur aspernatur ipsum delectus
        quidem cum molestiae nesciunt tenetur exercitationem ratione temporibus!
        Doloremque, maxime. Optio aperiam non praesentium. Harum, quibusdam!
        Quaerat adipisci temporibus necessitatibus explicabo? Quo, placeat
        dolorem! Aliquam, cum. Eaque, nobis. Illum impedit corporis obcaecati
        magnam voluptates non necessitatibus ipsum ab delectus dolores?
        Doloremque libero dolores, saepe illo ratione asperiores, necessitatibus
        magni quis eveniet perspiciatis officiis delectus adipisci
        exercitationem recusandae neque aliquam expedita suscipit ipsa porro
        ipsum excepturi pariatur maxime ex? Porro, tenetur?
      </div>
    </div>
  );
};

export default Dashboard;
