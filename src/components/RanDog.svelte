<script lang="ts">
    // import { JSDOM } from "jsdom";

    // const dom = new JSDOM();
    // global.document = dom.window.document;
    // global.Node = dom.window.Node;

interface Dog {
    message: string;
    status: string;
}


getRandomImage();
async function getRandomImage(): Promise<void>{
    let imageRandom = document.getElementById("imageRandom") as HTMLImageElement;
    const randomImageApiUrl: string = "https://dog.ceo/api/breeds/image/random";
    console.log(randomImageApiUrl);
    await fetch(randomImageApiUrl)
    .then(function(response){
        return response.json(); 
    })
    .then(function(json: Dog){
        if(imageRandom != null){
            console.log(json);
            imageRandom.src = json.message;
        }
    })
    .catch(function(error: Error){
        console.log(error);
    });
}
</script>

<div class="api-dog">
    <div id="rand">

        <img id="imageRandom" class="api-dog-img" src="" alt="click the button below">
    </div>
    <button id="btn-dog" on:click={getRandomImage}>Get a dog ;)</button>
</div>

<style>


.api-dog{

	display:block;
	background-color: #FEFBF6;
	/* margin: 0 auto; */
	height: 35em;
    margin-top: -2em;
    /* position:initial; */

}

#rand{
    display:block;
    background-color: #FEFBF6;
    padding-top: 8em;
}

.api-dog-img{
    /* margin-top: ; */
	display:block;
    position:top;
    top: 10em;
    margin-left: auto;
    margin-right: auto;
    /* position: inherit; */
    /* z-index: 7; */
    border-radius: 1em;
	/* margin-top: 6em; */
    border:1px solid rgba(78, 78, 100, 0.736);
    width: 300px;
    height: 300px;
}

#btn-dog{
	top: 1em;
	margin: 0 auto;
	position:relative;
	display: flex;
	color: #fff;
	background-color:#2F3542;

    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;

}
#btn-dog:hover {background-color: #7F5283}

#btn-dog:active {
  background-color:  #7F5283;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>

