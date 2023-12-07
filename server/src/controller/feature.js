const { log } = require('console');
const Feature = require('../models/FeatureImg');
const path = require('path');

const addFeatureImg = async (req, res, next) => {
  try {
    const imgUrl = req.file.filename;
    console.log(imgUrl, 'this is url');
    const featureData = new Feature({
      name: req.body.name,
      image: imgUrl,
    });
    console.log(featureData);
    await featureData.save();
    res.status(200).json({ success: true, featureData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};

const getFeatureImg = async (req, res) => {
  try {
    const featureData = await Feature.find();
 // for (let i = 0; i < featureData.length; i++) {
    //   const imagePath = path.join(
    //     __dirname,
    //     '../../uploads',
    //     featureData[i].image
    //   );
    //   featureData[i].image = imagePath;
    // }
   
    if (featureData) {
      res.json({
        msg: 'upload',
        featureData,
        // imagePath,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};

module.exports = { addFeatureImg, getFeatureImg };
