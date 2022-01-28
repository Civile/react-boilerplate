
/**
 * IdGenerator
 */
export class IdGenerator {

    // ! never use this properties driectly
    static id = 0;
    static randIds = [];

    /*
     ** Generate uniq  
    */
    static getId() {
        return this.id++;
    }

    /*
     ** Generate uniq random id 
    */
    static randId(min = 1, max = 1000) {
        let randId = Math.floor(Math.random() * (max - min) + min);
        while(this.randIds.includes(randId)) {
            randId = Math.floor(Math.random() * (max - min) + min);
        }
        this.randIds.push(randId);
        return this.randIds[
            this.randIds.length - 1
        ];
    }
}

/**
 * Location
 */
export class Location {

    static getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

}

/**
 * String
 */
export class String {

    static slug (str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
        // remove accents, swap ñ for n, etc
        let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        let to   = "aaaaeeeeiiiioooouuuunc------";
        for (let i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
        return str;
    }

    static random(length = 5) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

}