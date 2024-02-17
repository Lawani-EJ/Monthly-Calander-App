alert ("WELCOME TO YOUR MONTHLY CALENDER");
alert("ENTER THE MONTH NUMBER");
let month = parseInt (prompt("PLEASE ENTER THE MONTH NUMBER: "));
switch  (month) {
    case 1:
        alert("JANUARY HAS 31 DAYS");
        break;
        case 2:
            alert("FEBRUARY HAS 28 DAYS");
            break;
            case 3:
                alert("MARCH HAS 31 DAYS");
                break;
                case 4:
                    alert("APRIL HAS 30 DAYS");
                    break;
                    case 5:
                        alert("MAY HAS 31 DAYS");
                        break;
                        case 6:
                            alert("JUNE HAS 30 DAYS");
                            break;
                            case 7:
                                alert("JULY HAS 31 DAYS");
                                break;
                                case 8:
                                    alert("AUGUST HAS 30 DAYS");
                                    break;
                                    case 9:
                                        alert("SEPTEMBER HAS 30 DAYS");
                                        break;
                                        case 10: 
                                        alert("OCTOBER HAS 31 DAYS");
                                        break;
                                        case 11: 
                                        alert("NOVEMBER HAS 30 DAYS");
                                        break;
                                        case 12: 
                                        alert("DECEMBER HAS 31 DAYS");
                                        break;
            default: 
            console.log("INVALID MONTH NUMBER ");
 }
