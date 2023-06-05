export const  getCount=(number)=>{

    let count=''
    if(number>100000){
        if(number.length==8){
            count=number[0]+number[1]+'M';
        }else{
            if(number.length==7&& number[1]==0){
            count= number[0]+'M'  
            }else{
                count= number[0]+'.'+number[1]+'M'  
                }          
        }
        return count;
    }if(number<10000){
        count=number+'K'
        return count;

    }if(number>1000){
        count=number;
        return count;

    }else if (number>1000000000){
        count=number+'B'
        return count;

    }else{
        return number
    }

}

export const Filtertags=(s)=>{

    let startATag = s.indexOf('href') 
    let endAtag= s.indexOf('</a>')
    if(startATag!==-1){
        let stringss = s.slice(0,startATag-1)
        stringss+=` style='color:blue; '` ;
        stringss+=s.slice(startATag-1,2000)
        return stringss
    }else{
        return s
    }
   

}

export const getVideoUploadTime=(time)=>{

    date= new Date(time)
    cuurentDate= new Date()
   

    var total_seconds = Math.abs(date - cuurentDate) / 1000; //calculate days difference by dividing total seconds in a day 
    var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); 
    
    if(days_difference==0){ 
        const time= date.getHours();
        const ctime= cuurentDate.getHours();
        const result = 24-time+ctime;

        if(ctime<time){
            if(result==0){
                return date.getMinutes()+'Minutes Ago'
            }else{
            return result+'hours ago'
            }
        }else{
            if(result==0){
                return date.getMinutes()+'Minutes Ago'
            }else{
             return ctime-time+'hours ago';
            }
        }
    }else if (days_difference<30&&days_difference>7){
        console.log('d'+days_difference);
        let result =days_difference/7;
        result = result.toString().slice(0,1)
        return result+'weeks ago'
    }else if(days_difference>365)
    {
 
        let result = days_difference/365;
        result = result.toString().slice(0,1)
        return result+'years ago'

    }else if(days_difference<365&&days_difference>30){

        let result = days_difference/30;
        result = result.toString().slice(0,1)
        return result+'Months ago'
    }
    else {
        return days_difference+'day ago'
    }



}