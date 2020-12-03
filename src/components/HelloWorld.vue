<template>
    <div class="hello">
        {{development}}
        <input type="file" id="file">
        <button @click="upload">上传文件</button>
    </div>

</template>
<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                development: null,
                fileVal: ""
            }
        },
        methods: {
            upload: function () {
                /*let elementById = document.getElementById("file");*/
                let files = document.getElementById("file").files[0];
                //this.$axios.get("http://10.50.50.218:8810/edu-common/a/upload?type=IMAGE&objectName=" + files.name+"&contentType="+files.type)
                this.$axios.get("http://182.150.25.24:8810/:8810/edu-common/a/upload?type=IMAGE&objectName=" + files.name+"&contentType="+files.type)
                    .then(res => {
                        let data = res.data;
                        const fs = new FormData();
                        fs.append('key', data.resultData.key);
                        fs.append('x-obs-acl', data.resultData.xObsAcl);
                        fs.append('content-type', files.type);
                        fs.append('AccessKeyId', data.resultData.accessKeyId);
                        fs.append('policy', data.resultData.policy);
                        fs.append('signature', data.resultData.signature);
                        fs.append('file', files);
                        this.$axios.post("/api/",fs).then(rep => {
                            console.info(rep.data)
                        })
                    });
            }
        },
        created() {
            this.development = process.env.NODE_ENV
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
