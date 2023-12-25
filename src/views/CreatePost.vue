<template>
  <div class="create">
    <h1 style="text-align: center">Create Post</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-box">
        <label class="title">Title</label>
        <input class="post-body" type="text" v-model="title" required/>
      </div>
      <div class="input-box">
        <label class="title">Body</label>
        <textarea
          class="post-body"
          cols="30"
          rows="10"
          v-model="body"
          required
        ></textarea>
      </div>
      <div class="input-box">
        <label class="title">Tags</label
        ><small class="hit">(Hit, Use Enter key to add tag)</small>
        <input
          class="post-body"
          type="text"
          v-model="tag"
          @keydown.enter.prevent="createTags"
        />
      </div>
      <div v-for="tag in tags" :key="tag" class="pill">
        {{ tag }}
      </div>
      <div class="createBtn">
        <button >Create Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
        let rounter = useRouter()
        let title = ref('')
        let body = ref('')
        let tag = ref('')
        let tags = ref([])

        let createTags = () => {
            if (!tags.value.includes(tag.value)) {
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        let handleSubmit = async()=>{
            try {
                let response = await fetch("http://localhost:3000/posts", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            title: title.value,
                            body: body.value,
                            tags: tags.value
                        }
                    )
                })
                rounter.push({name:"home"})
                if (response.status === 404) {
                    throw new Error("Url Not Found")
                }
            } catch (error) {
                console.log(error.message);
            }
        }


        return {title,body,tag,tags,createTags,handleSubmit}
    }
};
</script>

<style>
.input-box {
  margin: 20px 0px 20px 0px;
}
.post-body {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #eee;
  margin: 10px 0 10px 0;
}
.hit {
  display: block;
  color: #a9aead;
}
.createBtn {
  display: flex;
  justify-content: center;
  margin: 20px;
}
button {
  background-color: rgba(225, 225, 225, 0.75);
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease-in-out;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.74);
  color: rgba(225, 225, 225, 0.75);
}
.pill {
  display: inline-block;
  margin: 10px 10px 10px 0;
  padding: 10px;
  background-color: rgba(225, 225, 225, 0.75);
  color: black;
  border-radius: 10px;
  cursor: pointer;
}
</style>
