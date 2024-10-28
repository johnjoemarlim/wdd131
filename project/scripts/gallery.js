const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
console.log("Last Modification:")
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});




const images = [
    {
        description: "October 11, Friday Game",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/462769775_8797296493635915_5620931481676570485_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=6jak6gS7JHsQ7kNvgG4km5R&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=AE5L5gHlLepdIPyrfUFg8th&oh=00_AYCd4RsQ1DfldH4iih5NsnqzgQ-FwyynweczaM9Z0yzSwA&oe=672545EF" 
    },
    {
        description: "October 11, Friday Game",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/462848544_8797296340302597_7237736245727948028_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=8IGmzkHSo0kQ7kNvgHdpvGu&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=AfwyUPLJsuYSOl0a5U6CYSR&oh=00_AYAYC0xa9Ow_Verx_szOLgabjYA68w55zpiltjHy_1y-zA&oe=67256E2B"
    },
    {
        description: "October 4, Friday Game",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/462015769_1057403718844576_7650542214726409155_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=PdKVv4GatjAQ7kNvgH6DycO&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=A--osmHxGXfXOOlgLJZwmjF&oh=00_AYCj0Xnk-7HaoC74hCiYuiJdmBX2X34G-ZuSbLr-FfkHOA&oe=672574E3"
    },
    {
        description: "September 25, Image of Friday Game",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/461262118_26876067915341502_8855772329057725844_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=-PADrgMMXPoQ7kNvgEDAe7O&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=AHeEGRExSTVC7_zxkSnIsoH&oh=00_AYBHSs4t9-McFbt10vWOM9hBfS38dRlTjlLrALyUA8fmUA&oe=67254F4A"
    },
    {
        description: "September 25, Image of Friday Game",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/461397533_26876067855341508_4053875946914020091_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=rThdt0B9LXMQ7kNvgEJEpvl&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=AEiXH2tFBbBX6SkO4bzl45m&oh=00_AYD7nsqSn02Ho_YdoqmymNqAZCN-m0RTBwbHEWH11bgLXw&oe=6725521E"
    },
    {
        description: "September 20 Image of Friday Game",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/460564029_872010178217964_735572212376049369_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=WTuEgjZHt3QQ7kNvgGQew95&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=AFSouYcbN_E__BrNd81w4az&oh=00_AYCpRTMv9VO5t9fnIOET66E_e7Xyn3QPyADgdOzZUcPfrA&oe=67255927"
    },
    {
        description: "September 20 Image of Friday Game",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/460726557_8602127136486186_7125523825778993166_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=AuT0K-gQVWEQ7kNvgHQcc6F&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=ArJ4Ul-UHM0aCiNXC7BFQYq&oh=00_AYCR089OcOiCGOSP66i89DNE0VLMefTFV8rJ6ZOiKC94vA&oe=6725697E"
    },
    {
        description: "July 6 Basketball League Image",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/449836564_25932231523058484_808106029813772837_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=zfaR275pURsQ7kNvgHFvWvY&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=AG2QSI-7zVRSed56hhUp1Mu&oh=00_AYAFdhnWxoMNSlGQ3etWJgEQJv-4VT-MtalzVADidUXVDw&oe=67257535"
    },
    {
        description: "July 6 Basketball League Image",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/448831269_25932231303058506_5355047318528499944_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=uHBEML7YGvQQ7kNvgGNMB21&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=AfUBTyAWBs_fBFnMStdouM9&oh=00_AYAugB0lsYxNR2_2-DrYwbyVuUGHZ7ZwN-fJuHTEDW7NoA&oe=67254F27"
    },
    {
        description: "July 6 Basketball League Image",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/450187281_25932230783058558_181482433468114294_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=0jGlrBPK3fEQ7kNvgGx0cg5&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=Af6Bl6Xh2TSpGFnGTgu30sY&oh=00_AYDonwVmJ_J6UInSjTSNPGsOqpIekYmRoFjdNCe5locwJA&oe=67255A4C"
    },
    {
        description: "February 10 Basketball League Champions",
        imageUrl: "https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/427167909_10234589664782074_1087782215075192981_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=haa_SH6JxOgQ7kNvgFN6a-s&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=Arl4G5vfY79TR_C9yNtTIEh&oh=00_AYCA_5RKVwXBMXcKRkfPkCvw9W92jex62XJTRjxGvXMPDw&oe=67254FD9"
    },
];



function addImage(allImages) {
    allImages.forEach(image => {
        // let card = document.createElement("section");
        let img = document.createElement("img");

        img.setAttribute("src", image.imageUrl);
        img.setAttribute("alt", image.description);
        img.setAttribute("loading", "lazy");
        img.setAttribute("class", "galleryImg");

        img.addEventListener('click', () => {
            // Create a full-screen image container
            const fullScreenContainer = document.createElement('div');
            fullScreenContainer.style.position = 'fixed';
            fullScreenContainer.style.top = '0';
            fullScreenContainer.style.left = '0';
            fullScreenContainer.style.width = '100%';
            fullScreenContainer.style.height = '100%';
            fullScreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            fullScreenContainer.style.display = 'flex';
            fullScreenContainer.style.justifyContent = 'center';
            fullScreenContainer.style.alignItems
           = 'center';
          
            // Create a full-screen image element
            
            const fullScreenImage = document.createElement('img');
            fullScreenImage.src = img.src;

            if (img.height < 250) {
            fullScreenImage.style.width = '80%';
            fullScreenImage.style.height = 'auto';
            // fullScreenImage.style.maxWidth = '800px';
            // fullScreenImage.style.maxHeight = '600px';
            } else {
                fullScreenImage.style.width = 'auto';
                fullScreenImage.style.height = '100%';
            }
                
            // Create a close button
            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.style.position = 'absolute';
            closeButton.style.top
           = '10px';
            closeButton.style.right = '10px';
            closeButton.style.backgroundColor
           = 'rgba(0, 0, 0, 0.5)';
            closeButton.style.color = 'white';
            closeButton.style.border = 'none';
            closeButton.style.borderRadius = '50%';
            closeButton.style.padding = '10px';
            closeButton.style.cursor = 'pointer';
          
            // Add event listener to close button
            closeButton.addEventListener('click', () => {
              document.body.removeChild(fullScreenContainer);
            });
          
            // Append elements to the container
            fullScreenContainer.appendChild(fullScreenImage);
            fullScreenContainer.appendChild(closeButton);
          
            // Append the container to the body
            document.body.appendChild(fullScreenContainer);
          });
        // img.addEventListener('click', () => {
            
        //     const fullScreenImage = document.createElement('img');
        //     fullScreenImage.src = img.src;
        //     if (img.height < 150) {
        //     fullScreenImage.style.width = '100%';
        //     fullScreenImage.style.height = '100%';
        //     fullScreenImage.style.position = 'fixed';
        //     fullScreenImage.style.top = '0';
        //     fullScreenImage.style.left = '0';
        //     fullScreenImage.style.zIndex
        //    = '9999';} else if (img.height == 225) {
        //     fullScreenImage.style.width = "auto";
        //     fullScreenImage.style.height = "100%";
        //     fullScreenImage.style.position = 'fixed';
        //     fullScreenImage.style.top = '0';
        //     fullScreenImage.style.left = '20%';
        //     fullScreenImage.style.zIndex
        //    = '9999';
        //    } else {
        //     fullScreenImage.style.width = "auto";
        //     fullScreenImage.style.height = "100%";
        //     fullScreenImage.style.position = 'fixed';
        //     fullScreenImage.style.top = '0';
        //     fullScreenImage.style.left = '33%';
        //     fullScreenImage.style.zIndex
        //    = '9999';
        //    }
          
            
        //     fullScreenImage.addEventListener('click', () => {
        //       document.body.removeChild(fullScreenImage);
        //     });
          
        //     document.body.appendChild(fullScreenImage);
          
        // });
        // card.appendChild(img);

        document.querySelector(".images-grid").appendChild(img);

        
    });
    
}

addImage(images);

// const image = document.querySelector('.galleryImg');
let numVisits = Number(window.localStorage.getItem("galleryVisits-ls")) || 0;
// reviewsDisplay.textContent = numReviews;
// if (numVisits !== 0) {
//     visitsDisplay.textContent = numVisits + 1;
// } else {    
//     visitsDisplay.textContent = "This is your first review. 🥳 Welcome!";
// }
numVisits++;

localStorage.setItem("galleryVisits-ls", numVisits);
