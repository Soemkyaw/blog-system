import { ref } from "vue";

let getSinglePost = (id) => {
  let post = ref(null);
  let err = ref("");

  let load = async () => {
      try {
        // await  new Promise((resolve,reject) => {
        //     setTimeout(resolve,1500)
        // })
      let response = await fetch("http://localhost:3000/posts/" + id);
      if (response.status === 404) {
        throw new Error("URL not found");
      }
      let data = await response.json();
      post.value = data;
    } catch (error) {
      err.vale = error.message;
    }
  };
  return { post, err, load };
};

export default getSinglePost;
