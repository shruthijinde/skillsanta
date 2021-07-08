const operatingsystem={
    name:'ubuntu',
    version:'18.4',
    license:'open source'
};
const keys=Object.entries(operatingsystem);

document.write(keys)

keys.forEach(entry => {
    let key=entry[0];
    let value=entry[1];

    document.write('${key};${value}');
});