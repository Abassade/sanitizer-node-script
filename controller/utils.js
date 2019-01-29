const phone = require ('node-phonenumber');

class ValueResponse {
    constructor(phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    value(){
        const phoneUtil = phone.PhoneNumberUtil.getInstance();
        const phoneNumber_var = phoneUtil.parse(`${this.phoneNumber}`,'NG');
        console.log(phoneNumber_var);

        const toNumber = phoneUtil.format( phoneNumber_var, phone.PhoneNumberFormat.INTERNATIONAL);
        console.log(toNumber);

        // console.log(toNumber);
        const stringtoNumber = toNumber.toString();
        const tel = stringtoNumber.split('');
        console.log('tel:', tel);

        const necThree = `${tel[5]}${tel[6]}${tel[7]}`;
        console.log('necthree',necThree);

        let mno='';

        switch (necThree){
            case "703" : 
            mno = 'MTN';
            break;
            case  "706" : 
            mno = 'MTN';
            break;
            case "803" : 
            mno = 'MTN';
            break;
            case  "806" : 
            mno = 'MTN';
            break;
            case  "810" : 
            mno = 'MTN';
            break;
            case  "813": 
            mno = 'MTN';
            break;
            case  "814" : 
            mno = 'MTN';
            break;
            case  "816" : 
            mno = 'MTN';
            break;
            case  "903" : 
            mno = 'MTN';
            break;
            case  "906": 
            mno = 'MTN';
            break;
            case "605":
            mno = 'GLO';
            break;
            case "705" :
            mno = 'GLO';
            break; 
            case "805" :
            mno = 'GLO';
            break; 
            case "807" :
            mno = 'GLO';
            break; 
            case "811":
            mno = 'GLO';
            break; 
            case "815" :
            mno = 'GLO';
            break; 
            case "905" :
            mno = 'GLO';
            break; 
            case "701":
            mno = 'airtel';
            break; 
            case "708":
            mno = 'airtel';
            break; 
            case "802":
            mno = 'airtel';
            break; 
            case "808":
            mno = 'airtel';
            break; 
            case "812":
            mno = 'airtel';
            break; 
            case "902":
            mno = 'airtel';
            break; 
            case "907":
            mno = 'airtel';
            break; 
            case "809":
            mno = '9MOBILE';
            break; 
            case "817":
            mno = '9MOBILE';
            break; 
            case "818":
            mno = '9MOBILE';
            break; 
            case "908":
            mno = '9MOBILE';
            break; 
            case "909":
            mno = '9MOBILE';
            break; 
            default: console.log('cannot identify network operator');
            
        }
        // console.log(mno);

        const telinfo = {
            phoneNumber: toNumber,
            provider: mno
        };

        return telinfo;


            }
}

module.exports = ValueResponse;