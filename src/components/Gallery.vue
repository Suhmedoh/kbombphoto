<template>
  <div class="gallery-blurb">
    <h1>{{ msg }}</h1>
    <div class="gallery-set">
        <div id="tester">
            <div class="overlay"> </div>
        </div>
        <vue-picture-swipe :items="items"></vue-picture-swipe>
    </div>
  </div>
</template>

<script>
// import VuePictureSwipe from 'vue-picture-swipe';
export default {
  name: 'Gallery',
  props: {
    msg: String
  },
    data() {
        return {
            worldEnderbg: require('../static/photos/theworldenders/IMG_4540.jpg'),
            items: [
                {
                    src: require('../static/photos/theworldenders/IMG_4514.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4514.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4522.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4522.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4524.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4524.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4530.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4530.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4538.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4538.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4540.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4540.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4543.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4543.jpg'),
                    w: 1024,
                    h: 817
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4546.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4546.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4548.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4548.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4551.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4551.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4552.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4552.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4574.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4574.jpg'),
                    w: 1024,
                    h: 813
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4597.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4597.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4604.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4604.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4605.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4605.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4612-2.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4612-2.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4616.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4616.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4626.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4626.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4632.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4632.jpg'),
                    w: 1024,
                    h: 789
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4637.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4637.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4653.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4653.jpg'),
                    w: 1024,
                    h: 779
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4655.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4655.jpg'),
                    w: 1024,
                    h: 756
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4672.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4672.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4673.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4673.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4679.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4679.jpg'),
                    w: 1024,
                    h: 761
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4681.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4681.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4695.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4695.jpg'),
                    w: 1024,
                    h: 806
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4709.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4709.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_4729.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_4729.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_5084.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_5084.jpg'),
                    w: 1024,
                    h: 508
                },
                {
                    src: require('../static/photos/theworldenders/IMG_5086.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_5086.jpg'),
                    w: 1024,
                    h: 683
                },
                {
                    src: require('../static/photos/theworldenders/IMG_5092.jpg'),
                    thumbnail: require('../static/photos/theworldenders/thumb.IMG_5092.jpg'),
                    w: 1024,
                    h: 1536
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .gallery-set {
        margin: auto;
        width:50%;
    }
    #tester {
        background-image: url('../static/photos/theworldenders/IMG_4540.jpg');
        height: 300px;
        width: auto;
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .overlay {
        background-color:#141414;
        opacity:.5;
        width: 100%;
        height: 100%;
    }
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
</style>
