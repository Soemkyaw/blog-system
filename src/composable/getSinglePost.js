import { ref } from "vue";
import { db } from "../firebase/config"

let getSinglePost = (id) => {
  let post = ref(null);
  let err = ref("");

  let load = async () => {
    try {
      let doc = await db.collection("posts").doc(id).get()
      post.value = {id:doc.id, ...doc.data()}
    } catch (error) {
      err.vale = error.message;
    }
  };
  return { post, err, load };
};

export default getSinglePost;
