import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Markdown from "marked-react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/post-page.module.css";
import SidePanel from "../../components/SidePanel";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div className="page">
      <div className="container">
        <div className={styles.post}>
          <p className={styles.postDate}>Published {date}</p>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.imgContainer}>
            <Image
              layout="fill"
              objectFit="cover"
              className={styles.image}
              src={cover_image}
              alt=""
            />
          </div>

          <div className={styles.postBody}>
            {/* <Markdown>{content}</Markdown> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              possimus aspernatur officiis accusamus aliquam expedita id illum
              ipsa saepe sapiente quas, incidunt illo, ea pariatur commodi iusto
              architecto, esse sint. Quis, cumque amet saepe dicta quam
              inventore ab delectus ullam dolor laborum necessitatibus culpa
              aperiam aliquam suscipit facere eius nobis? Dolorum soluta est
              iusto et repudiandae nobis adipisci! Tempore, magnam? Voluptatibus
              nesciunt tempora consectetur magnam fugit odio fugiat laborum.
              Repellat dolorem dolore eaque animi saepe exercitationem
              asperiores, fuga voluptatem quibusdam vero. Soluta obcaecati est
              quibusdam beatae odit corporis voluptatibus? Quidem. Laborum
              doloribus nihil deserunt sunt doloremque dolore sit recusandae
              corrupti hic quod totam tenetur quasi natus qui consectetur
              pariatur vero consequatur, eligendi eos. Accusantium eligendi
              ipsum inventore maxime reiciendis labore! Placeat saepe explicabo
              quod earum illo asperiores consectetur, consequatur assumenda
              itaque. Maiores molestias rem, nihil labore sunt aspernatur quod
              quibusdam necessitatibus, facere repellendus consequatur tempora
              quis cumque incidunt. Quidem, beatae? Molestias placeat libero
              quam modi reiciendis doloremque maiores consequuntur animi, nulla
              quaerat facilis, quidem officiis laborum pariatur. Animi cum,
              quasi, exercitationem repudiandae quo blanditiis accusamus
              molestias omnis labore nam repellendus. Dolore, blanditiis maxime.
              Ullam, at recusandae. Quae ratione tempora soluta culpa quis earum
              itaque laudantium veniam possimus, perferendis repellat,
              necessitatibus cupiditate quibusdam at deserunt exercitationem
              provident officiis dolorum. Et, fugiat. Doloribus tempora
              reiciendis, nam non provident sequi odit nihil accusamus, nostrum
              incidunt sint neque cum explicabo eaque. Error sit cumque maxime
              hic praesentium suscipit autem, placeat asperiores inventore
              dolorum facilis! Voluptates iure accusamus illo! Aliquid quis,
              pariatur aut dolorem, nam sit praesentium laudantium rerum saepe
              ab nemo quisquam sequi repudiandae neque! Minima, assumenda quia
              sit fugiat fuga veritatis cum magni. Eius possimus incidunt
              aspernatur maiores aliquam optio rem dolores similique, sequi sint
              pariatur vel animi beatae architecto maxime dignissimos eveniet!
              Ad, quibusdam reprehenderit. Iste quam eveniet quod, sunt corporis
              quia? Perspiciatis fuga aliquid quaerat ullam id corporis
              doloribus laborum expedita vel beatae nesciunt magni voluptatem
              iste nihil cumque sunt ad similique quam, reiciendis dignissimos
              labore. Illum totam ratione quam corrupti! Aliquid sapiente, vero
              ab ex consequatur explicabo quibusdam dolores facilis omnis culpa
              aspernatur officia itaque ullam repellat, incidunt blanditiis,
              necessitatibus quis nostrum temporibus. Modi adipisci fuga nam,
              quibusdam officia quas. Labore repellendus unde quasi neque
              dolorem. Porro odio necessitatibus libero culpa alias totam fugiat
              perspiciatis dignissimos quos quisquam consequatur repudiandae quo
              sint, commodi in ratione blanditiis sit adipisci, facilis
              voluptate? Rem qui, est tempora expedita labore nam consequatur
              illo veniam voluptatum blanditiis commodi ratione sint adipisci
              odit vel hic ullam quas! Impedit iste quibusdam fuga voluptate
              officia corrupti! Sapiente, eveniet. Culpa laboriosam, obcaecati
              tempore repudiandae provident, quam cupiditate ipsum minus atque,
              nihil omnis itaque mollitia ut sit modi suscipit. Dolore, officiis
              distinctio beatae incidunt consequatur qui architecto aspernatur
              inventore libero. Voluptatum accusamus tempora praesentium,
              numquam sapiente suscipit eveniet voluptas minima illum ipsum
              quaerat laborum culpa voluptatibus dolorum unde modi eligendi
              explicabo dolores quam ad totam dolore eaque. Nam, tempore natus.
              Asperiores, soluta. Vitae neque nostrum temporibus illum minima
              voluptatibus mollitia veniam rerum maiores? Velit, fuga, quibusdam
              vel magni natus inventore illum voluptatum vero, sint fugit culpa
              perspiciatis molestiae atque rerum! Magni voluptate nostrum alias
              at. Tenetur natus officiis asperiores hic sit non provident
              reprehenderit fuga recusandae. Ipsam aspernatur adipisci id,
              ducimus eius beatae deleniti facilis culpa ullam animi provident
              facere. Distinctio officia veniam, eius corporis modi quod odit
              blanditiis optio illo consectetur eos eligendi adipisci
              perferendis magnam quibusdam tempore commodi minus eaque fugit
              mollitia, excepturi alias libero? Iure, rerum id. Adipisci hic
              error sunt maxime veritatis numquam fugiat voluptates quo
              exercitationem, vitae saepe et laudantium, porro quae, quidem
              corrupti nobis reprehenderit qui esse excepturi consectetur? Sit
              perspiciatis quibusdam harum nemo? Aut inventore officiis corrupti
              facilis sunt saepe repudiandae debitis nisi tempore eos, pariatur
              ad, accusantium possimus eveniet laborum facere ratione, dolorum
              et mollitia perferendis cum repellendus optio! Hic, iure
              blanditiis. Totam nesciunt amet, labore enim quod ipsum assumenda.
              Libero, voluptatum. Adipisci exercitationem voluptatibus vitae
              quas quasi reprehenderit odit soluta! Eos ut reiciendis,
              reprehenderit fuga alias omnis corrupti ad rerum cum. Quam quae,
              optio iure reprehenderit animi facilis voluptas explicabo dicta
              odit itaque delectus molestias! Ratione, consequatur? Debitis eos
              sit quasi architecto exercitationem rem, asperiores vel excepturi
              fugiat accusantium doloremque explicabo. Nobis nulla culpa vero
              fuga deserunt sint quisquam nemo at distinctio veritatis delectus
              maxime facilis recusandae, aspernatur totam officia itaque,
              architecto nam minus odit cumque? Ut expedita ea repellendus
              cupiditate? Laborum veniam sunt iusto cupiditate quibusdam
              temporibus quod quos labore in voluptates. Aliquid veniam
              provident quam similique voluptatum rem corporis necessitatibus
              mollitia consequuntur quisquam reprehenderit, nihil sed
              perspiciatis, ex quasi! Autem praesentium ipsam exercitationem,
              deleniti non, nostrum officiis unde in minus consequuntur aut quod
              repellat. Repellendus saepe, ullam mollitia beatae harum excepturi
              repudiandae consequatur sit enim explicabo unde magnam
              necessitatibus? Provident deserunt repellendus dignissimos
              sapiente, perspiciatis nihil enim eum eos aliquam cum iusto
              accusantium rerum quasi quia corporis beatae est hic ullam amet
              eaque dolorum doloremque minus facere in. Consequuntur? Dolores
              iste ad consequatur vero corrupti tenetur provident voluptates
              veniam consequuntur atque dolore autem voluptatibus fugit, magni
              molestias voluptatum rerum commodi labore! Animi dolorum minus
              quod porro voluptas numquam voluptates. Temporibus vero excepturi
              laborum asperiores voluptates? Laboriosam, exercitationem delectus
              nisi minima dolore maxime ipsa iure dolor molestias dolores
              voluptatum, provident culpa vero non, sequi quis ducimus totam at
              dolorum officiis! Rerum sapiente dolores aliquid cum porro
              officiis ducimus nam eos alias dignissimos, minima labore culpa,
              dolorem magni, et velit iure repellat quasi. Doloremque similique,
              molestias iste in obcaecati ut aliquid. Maxime, officia. Ipsam
              quod ad harum consectetur quis numquam minima. Quos veniam optio
              provident voluptas voluptatibus dolor sint? Iure reiciendis porro
              nemo est vero temporibus, laudantium molestias eaque blanditiis!
              Culpa! Est provident vitae molestias temporibus. Laudantium minus
              nobis provident accusantium, repellendus dolore amet iste iure
              culpa est. Distinctio unde ab deserunt, minus ea eveniet
              voluptatum beatae nulla tempore. Ducimus, vitae. Amet eum, harum
              facere, non animi iusto praesentium sit nostrum laudantium
              obcaecati qui vitae libero aperiam accusantium pariatur ipsa ea?
              Eaque vel vitae eum dolorum harum ad assumenda reiciendis ducimus!
              Reprehenderit illo laboriosam vitae modi veniam eos, assumenda
              enim vero doloribus? Id, hic est! Laboriosam sed eveniet, libero
              adipisci cupiditate odio quasi consequuntur corrupti doloribus
              nihil veniam? Soluta, dicta quaerat! Quod unde veritatis ut
              molestias nobis sunt rerum incidunt! Impedit vitae laborum ducimus
              eveniet asperiores dicta tempora quibusdam alias inventore rerum
              molestias qui neque, adipisci aliquid at nulla unde veniam. Et
              molestiae alias eveniet repellendus aperiam saepe, laborum
              officiis doloribus dolorem vel debitis odit tempore ratione vero
              voluptatum deserunt, voluptate eos non nobis ullam. Adipisci qui
              ex culpa dolorem cumque. Enim numquam molestias officia cumque
              dicta doloremque voluptatibus rem quia earum, dolores quasi,
              corrupti sit molestiae iure ducimus odit saepe aspernatur
              nesciunt, eius dolorum recusandae repellat neque? Illo, enim
              itaque? Alias error consequatur minima eos dolores officiis ex.
              Unde ea veritatis facilis cum repellat expedita temporibus natus
              doloribus ut, voluptatibus sint, quis odit itaque possimus
              aspernatur rerum. Nihil, voluptate nesciunt! Iure architecto eius
              nisi eos et. Quo, voluptates? Harum voluptates voluptas quae
              veritatis porro maxime aliquam saepe fuga dolore voluptatem autem,
              distinctio animi repellendus sequi laudantium debitis aliquid
              alias! Repellendus! Voluptate excepturi numquam eius dolorem alias
              quibusdam ad. Excepturi sint sed dolores assumenda? Tenetur
              consectetur odio id voluptas! Reprehenderit mollitia illo
              quibusdam amet fugit fugiat maiores qui provident cum vero? Enim
              eveniet perferendis illo molestiae iste laboriosam qui libero,
              adipisci nihil, cupiditate eum nostrum quas! Voluptatibus
              praesentium obcaecati doloribus? Dolorem odit voluptas iusto, modi
              rerum veniam obcaecati unde dicta harum. Magni at quas qui quasi
              ipsam perferendis sint. Nam nesciunt pariatur placeat ullam
              dolorem. Doloribus deserunt impedit obcaecati sunt minima
              suscipit? Necessitatibus accusamus tempora dolores placeat quia
              nostrum consequuntur natus? Cumque repellat eius ea dolorum dicta
              nihil fuga, magnam iste fugit? Maxime reprehenderit dignissimos
              illo magni, consequuntur quasi quibusdam nisi, laboriosam
              voluptatibus facilis soluta rem voluptatum tempora aut. Voluptate,
              corporis? Facilis tenetur minus possimus explicabo exercitationem
              repellendus ratione neque vitae hic reprehenderit sapiente
              reiciendis et, totam, omnis nisi adipisci minima itaque ut
              consequuntur recusandae debitis nesciunt atque animi vero?
              Deserunt? Id qui aliquid blanditiis facilis dolore nam,
              consequuntur pariatur fuga ut cumque non itaque quos incidunt
              consequatur suscipit, veniam laboriosam quam, minima earum dolores
              odit veritatis. Similique iusto dolor nostrum! Amet reiciendis
              distinctio in placeat perspiciatis. Dolores, similique itaque! Quo
              dolorum, sit officia labore rerum eligendi ipsa iusto animi
              doloremque voluptatum libero similique architecto maxime molestias
              numquam debitis nisi error. Rem doloremque delectus nisi, numquam
              ea deserunt excepturi quod omnis veniam repellat ipsam reiciendis
              animi facere exercitationem voluptates totam, adipisci officia
              odio eligendi! Hic explicabo sed quibusdam fuga. Illo, quis! Eius
              doloribus a quidem, voluptatum non animi, laboriosam minus autem
              sint vero ut quis praesentium. Nam corrupti ut necessitatibus enim
              dolore. At maiores iste fuga totam iusto consequatur nam
              voluptatem! Doloremque iusto nostrum fugit magni commodi minima,
              alias minus. Totam quam cum sunt blanditiis sapiente repellat non
              dignissimos exercitationem quas inventore provident quisquam, ex
              possimus ratione tenetur? Nulla, temporibus ullam? Rem aperiam
              rerum eveniet modi earum soluta ex, veritatis facere eligendi
              consectetur unde officiis impedit ipsam nemo sed itaque at
              obcaecati. Consequuntur ad quibusdam quia aliquam dignissimos
              dolore id corporis.
            </p>
          </div>
        </div>
        <SidePanel />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
