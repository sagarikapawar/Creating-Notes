const useCreateDates=()=>{
    const dateObj=new Date();
    let month=dateObj.getMonth();
    let monthName;
    switch(month){
        case 0:monthName='Jan'
        break
        case 1:monthName='Feb'
        break
        case 2:monthName='March'
        break
        case 3:monthName='April'
        break
        case 4:monthName='May'
        break
        case 5:monthName='June'
        break
        case 6:monthName='July'
        break
        case 7:monthName='Aug'
        break
        case 8:monthName='Sept'
        break
        case 9:monthName='Octo'
        break
        case 10:monthName='Nov'
        break
        case 11:monthName='Dec'
        break
        
            
        
    }
    const date=`${monthName} ${dateObj.getDate()},${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`
return date;
}
export default useCreateDates