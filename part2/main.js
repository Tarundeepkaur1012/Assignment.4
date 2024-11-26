body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  
  h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .full-img {
    position: relative;
    text-align: center;
  }
  
  .displayed-img {
    max-width: 100%;
    height: auto;
    border: 2px solid #ccc;
    border-radius: 5px;
  }
  
  button.dark {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: black;
    color: white;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .thumb-bar {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  
  .thumb-bar img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .thumb-bar img:hover {
    border-color: black;
  }
  