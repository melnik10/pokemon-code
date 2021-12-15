
const getObjectProperty = (obj, path, defaultValue = undefined) => {
    const arrPath = path.toString().split('.')
    if ((arrPath.length === 0) || (obj[arrPath[0]] === undefined)) {
        console.log(defaultValue)
        return
    }
    let resultValue = obj[arrPath[0]];
    for (let i = 1; i < arrPath.length; i++) {
        resultValue = resultValue[arrPath[i]]
        if (resultValue === undefined) {
            console.log(defaultValue)
            return
        }
    }
    console.log(resultValue)
}

const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
}
getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
getObjectProperty(obj, 123, "Default value"); // > 'Default value'