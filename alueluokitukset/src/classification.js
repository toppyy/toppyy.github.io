

class Classification {
    constructor(raw_classification) {
      
        const codes = raw_classification.map((url) => url.substring(url.length - 3, url.length))
    }

    get get_codes() {
        return codes;
    };

  }
  