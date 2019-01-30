const phone = require ('node-phonenumber');

class ValueResponse {
    constructor(phoneNumber, region){
        this.phoneNumber = phoneNumber;
        this.region = region;
    }

    value(){
        const phoneUtil = phone.PhoneNumberUtil.getInstance();
        const phoneNumber_var = phoneUtil.parse(`${this.phoneNumber}`,`${this.region}`);
        const toNumber = phoneUtil.format( phoneNumber_var, phone.PhoneNumberFormat.INTERNATIONAL);

        const stringtoNumber = toNumber.toString();
        const tel = stringtoNumber.split('');

        const necThree = `${tel[5]}${tel[6]}${tel[7]}`;

        let mno='';

        switch (necThree){
            case "703" : 
            case  "706" : 
            case "803" : 
            case  "806" : 
            case  "810" : 
            case  "813": 
            case  "814" : 
            case  "816" : 
            case  "903" : 
            case  "906": 
            mno = 'MTN';
            break;
            case "605":
            case "705" :
            case "805" :
            case "807" :
            case "811":
            case "815" :
            case "905" :
            mno = 'GLO';
            break; 
            case "701":
            case "708":
            case "802":
            case "808":
            case "812":
            case "902":
            case "907":
            mno = 'AIRTEL';
            break; 
            case "809":
            case "817":
            case "818":
            case "908":
            case "909":
            mno = '9MOBILE';
            break; 
            default: 
            mno = 'UNKNOWN'
            console.log('cannot identify network operator');
            
        }

        const telinfo = {
            phoneNumber: toNumber,
            provider: mno
        };

        return telinfo;


            }
}

module.exports = ValueResponse;