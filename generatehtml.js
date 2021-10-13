function generatehtml(data) {
    return `# ${data.project} 
    # username
    ${
      data.Username 
    }
    
    # location
    ${
        data.Location
    }

    #hobby
    ${
        data.Hobby
    }
  
  
  
  `;
  }
  
  module.exports = generatehtml;
  