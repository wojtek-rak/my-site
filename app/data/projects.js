// TODO Add a couple lines about each project
const data = [
  {
    title: 'Building Reinforcement Learning Trading Agents',
    subtitle: 'RL Trading agents',
    link: 'https://drive.google.com/file/d/1QWbsthLCY1iPuoxDoB5xAQukSUXVos3x/view?usp=sharing',
    image: '/images/projects/rl.jpg',
    date: '2018-12-20',
    desc: 'Simulated a virtual exchange in python which maintains an order-book and keeps track of stocks and traders data.'
      + ' Implemented trading strategies based on Reinforcement Learning algorithms(DDPG and PPO) in Tensorflow. '
      + ' Compared the performance of these strategies with conventional strategies like mean reversion and trend following. ',
  },{
    title: 'Web Application for Ride Sharing',
    subtitle: 'sparse portfolio construction',
    link: 'https://drive.google.com/file/d/17P5_JsJtnZBhGIuAuu_WZnFU5nsrvxO3/view?usp=sharing',
    image: '/images/projects/cloud.jpg',
    date: '2019-04-20',
    desc: 'Built a full stack web application for car-pooling purely using Amazon Web Services.'
      + 'Designed a DynamoDB database for storing rider and driver information and interfaced it with a frontend  Lex chatbot.'
      + 'Developed and implemented an algorithm for ride matching using google-maps API and parallelized it using pyspark.'
      + ' Deployed the spark jobs on an AWS EMR cluster.',
  }, 
   {
    title: 'Style Transfer in Tensorflow',
    subtitle: 'Style transfer',
    link: 'https://drive.google.com/file/d/1fHdYB4j0Wte6GWn5Il0AAMqDklveZy5R/view?usp=sharing',
    image: '/images/projects/style_transfer.jpg',
    date: '2018-11-20',
    desc: 'Implemented the neural style transfer algorithm which transfers the style of an image onto the content image.'
      + ' Used Tensorflow to build the neural networks and OpenCV library for image processing. '
      + 'E mployed the pretrained VGG-19 network to extract features and to generate the style transferred image.',
  }, {
    title: 'Sparse Portfolio Construction',
    subtitle: 'sparse portfolio construction',
    link: 'https://drive.google.com/file/d/1JKBD9DPs2R7gmRouC4XmLpTjJuz3vXJW/view?usp=sharing',
    image: '/images/projects/sparse.jpg',
    date: '2019-03-20',
    desc: 'Developed a sparse portfolio optimization algorithm, based on the Markowitz model to construct sparse porfolios.'
      + 'Implemented a trading strategy based on it and back-tested on 10 years of historical S\&P 500 data',
  }, 
];

export default data;
