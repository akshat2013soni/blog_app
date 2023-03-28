import { Link } from "react-router-dom"
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle"><Link to="/single" className="link">Lorem ipsum dolor sit amet consectetur adipisicing.</Link></span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea eius explicabo non cum consequuntur dolorem, placeat esse culpa, modi soluta dolorum et repellat! Placeat rem modi corrupti eos cupiditate molestiae, dolor, error et incidunt architecto unde reprehenderit atque veniam facere nihil! Hic explicabo, tempora amet eveniet corporis beatae aut fuga! Accusantium ut nulla consectetur velit impedit porro explicabo error. Ipsa magnam quasi voluptas? Ad sed quia beatae iusto recusandae expedita architecto explicabo saepe laboriosam enim molestias, quod nesciunt quam animi accusamus sequi quas nam. Fuga adipisci nihil quo accusantium aspernatur delectus distinctio qui, aliquam id eius cum in ullam dignissimos tempore debitis possimus quam eos consequatur? Tempore doloribus fugit quidem impedit ullam, quae pariatur eum nulla possimus laborum officiis iure incidunt ut. Quam assumenda quisquam cumque sunt incidunt necessitatibus eveniet blanditiis culpa, aliquam mollitia facere! Laboriosam consectetur ullam veniam harum quam qui voluptas maxime consequuntur vitae iste! Consequuntur, sed iusto? Veniam repudiandae id quo recusandae iure assumenda tempora, corporis dolore dolores atque, explicabo quam, esse qui. Provident incidunt perferendis molestiae at facilis nobis sit qui quia dicta! Delectus, reiciendis consequatur quisquam cumque quam aperiam eius incidunt inventore corporis maiores quod error exercitationem quasi porro accusantium quidem iusto fugit ullam blanditiis nihil nulla. Aspernatur, libero repellendus! Sint consequuntur atque nam facere officiis ut dignissimos culpa voluptatem molestias repellat illo, veniam, ipsam non excepturi asperiores, dolores iure quia possimus commodi? Cum, distinctio modi fugit harum eligendi incidunt deleniti vitae autem at, ratione voluptate illum quibusdam quidem! Mollitia, repellat cupiditate quisquam veritatis ullam nostrum esse corporis blanditiis nesciunt, consectetur facilis omnis saepe quia sequi iure quaerat eligendi ipsam quos tempora suscipit. Eum omnis minus dolorem obcaecati illo sit ullam ipsa culpa? Nisi nam voluptatum ullam vel veniam libero modi eum possimus facere reiciendis ducimus numquam repellat, voluptate rerum atque. Sit, facilis vero!
        </p>
    </div>
  )
}
