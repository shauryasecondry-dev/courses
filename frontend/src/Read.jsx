import { useLocation, Navigate } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar.jsx";

function Read() {
  const location = useLocation();
  const ele = location.state?.ele;

  if (!ele || !ele.course) {
    return <Navigate to="/user/purchase" />;
  }

  return (
    <>
      <Navbar />

      <div
        className="container"
        style={{
          marginTop: "12vh",
          padding: "3vh 10vw",
          marginBottom: "5vh",
        }}
      >
        <h2 className="fw-bold mb-5">My Purchased Course</h2>

        <img
          src={ele.course.image}
          alt={ele.course.title}
          className="img-fluid rounded shadow-sm mb-4"
          style={{
            width: "50vw",
            height: "40vh",
            objectFit: "cover",
          }}
        />

        <h4 className="fw-bold mb-3">
          {ele.course.title}
        </h4>

        <h5 className="text-muted mb-4">
          <i className="fa-solid fa-user me-2"></i>
          Created by{" "}
          <span className="fw-semibold">
            {ele.course.user?.username}
          </span>
        </h5>

        <p className="text-secondary mb-4">
          {ele.course.description}
        </p>
        <h4>Content</h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nemo et eius laudantium distinctio blanditiis possimus deleniti veniam maxime, aliquid illum placeat asperiores quae alias magnam explicabo quas rem minus!
        At, labore quos. Non veniam ipsum ipsam repudiandae facere quam laudantium eligendi et eaque vero omnis ratione sint aliquid officiis provident, dolores voluptatibus nobis obcaecati, neque voluptas reprehenderit repellendus magni!
        Quae cumque, commodi eos ratione fugit perferendis doloremque consequuntur consectetur deleniti molestiae delectus minus error nisi facilis maxime ducimus vitae nihil a culpa reiciendis praesentium dolores nostrum? Assumenda, expedita incidunt?
        Adipisci dolor soluta minima animi unde temporibus veniam quos ipsum iure cum, voluptas asperiores eveniet cumque quam assumenda voluptatibus! Natus, voluptate? Facilis ipsa autem adipisci ex provident dolores modi fugiat.
        A impedit, laboriosam maxime, aut dicta repudiandae aperiam iste asperiores distinctio dolores quas quam corporis autem ullam voluptatibus quasi voluptas odit reprehenderit sapiente, accusantium nihil id? Ullam ducimus accusamus hic!
        Dolor quam similique, laboriosam blanditiis deserunt nihil accusantium dignissimos nulla, quae debitis recusandae eaque porro natus nam suscipit, laborum maiores illo accusamus et minus! Rerum quo nemo odio quidem repellat.
        Vel dolorum eaque corporis exercitationem accusamus excepturi, a asperiores? Possimus veritatis a repellendus adipisci unde. Deleniti quaerat libero in fugit tempore expedita dolore molestiae eius. Facilis dignissimos voluptatum animi et.
        Laboriosam aperiam ea nisi reiciendis, est quaerat consectetur quisquam optio voluptates, asperiores ratione doloremque debitis molestias, inventore repudiandae ullam! Veritatis ea veniam ab tempore temporibus fuga aut. Reprehenderit, accusamus facilis.
        Atque ad ea sunt minima est cum fuga tenetur dolorem laborum ratione perferendis ullam soluta necessitatibus, eaque consequuntur in, expedita possimus autem fugiat consequatur hic praesentium. Delectus vel ratione at.
        Consequuntur possimus at rem harum voluptatibus delectus quaerat! Deleniti ducimus eaque eum eligendi vel at libero quidem voluptate veritatis consequuntur eos, a quos vitae ipsum velit! Recusandae quaerat consequatur quis.
        Quod veritatis esse iusto ab dolorem! Ad repellendus voluptatem temporibus, fugit dolor nostrum molestiae, quas, autem eos deleniti deserunt tenetur libero tempore. Assumenda, facere necessitatibus dolorum tenetur laboriosam quas facilis?
        Consectetur iusto corporis quae eum et fugit autem veniam ab. Ratione labore velit assumenda sunt illum ut molestiae. Eius atque fugiat id necessitatibus accusamus earum est eos deleniti nesciunt numquam!
        Exercitationem expedita praesentium corporis excepturi quod velit atque hic placeat molestias? Iusto hic accusantium mollitia maxime quasi ipsam, deleniti sequi. Omnis voluptatem nisi quae rem esse dicta saepe, perspiciatis molestias?
        Repudiandae vitae excepturi totam exercitationem vero dolorem, asperiores magni error obcaecati, ut nisi, deserunt tempore. Quo nemo ipsam ex ducimus maxime dicta quas sint. Incidunt perspiciatis animi accusantium autem ea?
        Illo, numquam fugit ab omnis rerum atque cupiditate animi aliquam in doloremque itaque quod, ipsum, dolorum sit? Laudantium nostrum deserunt mollitia ad vitae delectus, est perferendis dolor odio optio id?
        Reprehenderit ipsum cumque consectetur est eveniet ab unde, earum nihil alias aut doloribus eius quia reiciendis doloremque dolorum impedit facere esse iusto eum pariatur laborum laboriosam quisquam. Impedit, neque quibusdam.
        Molestiae, perspiciatis dignissimos? Neque recusandae voluptatum ipsa debitis laudantium alias iusto, consequatur cum! Totam illo voluptate laborum modi, accusantium rem, debitis expedita sequi, sit cumque commodi optio minima quas in.
        Dignissimos numquam reprehenderit quis culpa porro sed explicabo repudiandae deleniti dicta. Voluptatum, dolore! Delectus dolore eligendi reiciendis voluptatibus consequatur! Nulla veritatis temporibus doloribus totam adipisci. Quia numquam pariatur voluptatum vitae.
        Mollitia aperiam incidunt reiciendis nisi quia suscipit magnam, esse vel amet ad ipsam magni earum eos dicta debitis totam error unde veritatis reprehenderit officia non tempora veniam. Cupiditate, magni aliquam.
        Neque veniam perferendis, perspiciatis odio maxime laborum ullam officia fuga veritatis modi, corporis sint nemo voluptate quos eum dolor distinctio illum explicabo pariatur facere saepe accusantium minus sunt voluptatem. Minus?
        Similique at odit aliquam quas consequuntur eligendi sequi quod incidunt. Vel excepturi, voluptates consequatur sint eum sed ex iste quos tempora autem harum, libero aliquid est omnis, ipsam eos. Quaerat.
        Voluptas, sed. Nesciunt accusantium quas similique harum delectus voluptates quam aspernatur dolorum quasi cupiditate. Aperiam, et! Esse similique praesentium vitae provident vero ipsa aliquid molestias ullam laborum, nulla consequuntur. Laboriosam.
        Magni harum similique libero assumenda aspernatur temporibus, pariatur voluptate, ab optio magnam facere a id culpa repellendus laborum hic. Consequatur fuga officia eius quae ipsa dolor quos perferendis ipsum consectetur!
        Accusantium, praesentium officia vel molestiae ullam nam sed accusamus molestias, sint reprehenderit quas eius cum est sequi nobis eos. Quisquam, repudiandae? Laborum cupiditate ipsa labore cum natus sequi nemo odit.
        Inventore, quae quod fugiat voluptatibus officiis, modi commodi repudiandae pariatur quia libero ducimus officia cum vitae distinctio unde aliquam dicta repellendus consectetur minima voluptate explicabo ipsam. Nobis quidem corrupti similique!
        Quisquam earum necessitatibus expedita excepturi exercitationem molestias ex harum fugiat nisi eius! Odio quod temporibus ea tempora, quos provident iure alias consequuntur iste a ipsum? Consequatur delectus non totam sed!
        Ipsum animi cupiditate, fugiat delectus culpa enim corporis! Repudiandae, beatae dolorem ipsa sunt recusandae, accusantium vero modi commodi, necessitatibus illo accusamus soluta! Aspernatur esse enim vitae saepe, soluta id dolor.
        Odio a ipsum distinctio. Ducimus porro iusto architecto necessitatibus, placeat ut expedita. Quam velit nobis minus in quaerat consequuntur maxime, officia, id totam repudiandae, dolor assumenda. Maxime fugit tenetur ipsam!
        Aliquid iste blanditiis ea nihil. Provident ipsum sequi maxime laborum facere assumenda ullam rem, porro debitis cupiditate voluptas suscipit recusandae quam dicta libero veniam labore beatae saepe unde officiis corrupti?
        Dolores maiores ipsum debitis doloribus. Similique qui sunt magni vitae, quae assumenda nihil quisquam magnam quaerat expedita debitis delectus officia aut, eligendi veritatis! Placeat cum quibusdam cupiditate incidunt quos quasi.
      </div>
    </>
  );
}

export default Read;
