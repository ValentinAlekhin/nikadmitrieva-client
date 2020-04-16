const fs = require('fs-extra')
const path = require('path')
const sharp = require('sharp')

const img = path.join(__dirname, 'img')

compressImgs(img)

async function compressImgs(from) {
   const compressed = path.join(__dirname, 'compressed')
   await fs.remove(compressed)
   await fs.mkdir(compressed)

   repiat(from)

   async function repiat(from) {
      try {
         const response = await fs.readdir(from)
         response.forEach(async res => {
            const resPath = path.join(from, res)
            const state = await fs.lstat(resPath)
            const newPath = resPath.split('\\').map(p => {
               if (p === 'img') {
                  return 'compressed'
               } else return p 
            }).join('\\')

            if (state.isDirectory()) {
               await fs.mkdir(newPath)
               await repiat(resPath)
            } else {
               await sharp(resPath)
                  .jpeg({
                     quality: 80,
                     chromaSubsampling: '4:2:0'
                  })
                  .toFile(newPath)   
            }
         })
      } catch (err) {
         console.log(err)
      }
   }
}
