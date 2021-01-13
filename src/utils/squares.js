function rainbow(numOfSteps, step) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    var r, g, b
    var h = step / numOfSteps
    var i = ~~(h * 6)
    var f = h * 6 - i
    var q = 1 - f
    switch (i % 6) {
        case 0:
            r = 1
            g = f
            b = 0
            break
        case 1:
            r = q
            g = 1
            b = 0
            break
        case 2:
            r = 0
            g = 1
            b = f
            break
        case 3:
            r = 0
            g = q
            b = 1
            break
        case 4:
            r = f
            g = 0
            b = 1
            break
        case 5:
            r = 1
            g = 0
            b = q
            break
    }
    var c =
        "#" +
        ("00" + (~~(r * 255)).toString(16)).slice(-2) +
        ("00" + (~~(g * 255)).toString(16)).slice(-2) +
        ("00" + (~~(b * 255)).toString(16)).slice(-2)
    return c
}

const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1))

// export const squares = {
//     a: {
//         top: 0,
//         left: 0,
//         backgroundColor: "#ff0000",
//     },
//     b: {
//         top: 0,
//         left: 60,
//         backgroundColor: "#ff5f00",
//     },
//     c: {
//         top: 0,
//         left: 120,
//         backgroundColor: "#ffbf00",
//     },
//     d: {
//         top: 0,
//         left: 180,
//         backgroundColor: "#dfff00",
//     },
//     e: {
//         top: 60,
//         left: 0,
//         backgroundColor: "#7fff00",
//     },
//     f: {
//         top: 60,
//         left: 60,
//         backgroundColor: "#1fff00",
//     },
//     g: {
//         top: 60,
//         left: 120,
//         backgroundColor: "#00ff3f",
//     },
//     h: {
//         top: 60,
//         left: 180,
//         backgroundColor: "#00ff9f",
//     },
// }

const length = 8
const width = 8
const area = length * width
const steps = [...Array(area).keys()]
export const squares = steps.map((step, i) => {
    const r = randomBetween(0, 255)
    const b = randomBetween(0, 255)
    const g = randomBetween(0, 255)
    return {
        id: i,
        top: Math.floor(i / width) * 60,
        left: (i % width) * 60,
        zIndex: 0,
        r,
        b,
        g,
        backgroundColor: `rgb(${r},${g},${b})`,
    }
})

export const targets = squares.map(({ id, top, left, r, b, g }) => ({
    id,
    top,
    left,
    r,
    g,
    b,
}))

// export const squares2 = [...Array(16).keys()].map((i) => {})
