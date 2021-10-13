function generatehtml(data) {
    return `# ${data.project} 
    # username
    ${
      data.Name 
    }
    
    # location
    ${
        data.Location
    }

    #hobby
    ${
        data.Hobby
    }
  
    #food
    ${
      data.Food
    }

    #username
    ${
      data.Username
    }

    #LinkedIn
    ${
      data.LinkedIn
    }
  `;
  }
  
  module.exports = generatehtml;
  