module.exports = function toReadable (number) {
    let string_number = "";
    let remainder = 0;
    let new_Remainder = 0;
    let integer = 0;
    let new_integer = 0;
    let digit_string = {
        0: 'zero',
        1: 'one', 
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    let two_digit_string = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    if( digit_string.hasOwnProperty(number)){
        return string_number = digit_string[number];
    } else{
        remainder = number % 100;
        integer = Math.floor(number / 100);
        if( number < 100){
            new_remainder = remainder % 10;
            new_integer = Math.floor(remainder / 10);
            if( new_remainder === 0){
                return string_number = `${two_digit_string[new_integer]}`;
            } else{
                return string_number = `${two_digit_string[new_integer]} ${digit_string[new_remainder]}`;
            }
        }
        if( remainder === 0){
            return string_number = `${digit_string[integer]} hundred`;
        } else if(digit_string.hasOwnProperty(remainder)){
            return string_number = `${digit_string[integer]} hundred ${digit_string[remainder]}`;
        } else{
            new_remainder = remainder % 10;
            new_integer = Math.floor(remainder / 10);
            if( new_remainder === 0){
                return string_number = `${digit_string[integer]} hundred ${two_digit_string[new_integer]}`;
            } else{
                return string_number = `${digit_string[integer]} hundred ${two_digit_string[new_integer]} ${digit_string[new_remainder]}`;
            }
        }
    }
}
