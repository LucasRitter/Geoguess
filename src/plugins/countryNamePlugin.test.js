const countryNamePlugin = require("./countryNamePlugin")
// @ponicode
describe("countryNamePlugin.default.install", () => {
    test("0", () => {
        let callFunction = () => {
            countryNamePlugin.default.install({ prototype: { $countryNameLocale: "Maggio, Hermiston and Schowalter" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            countryNamePlugin.default.install({ prototype: { $countryNameLocale: "Facebook, Inc." } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            countryNamePlugin.default.install({ prototype: { $countryNameLocale: "Microsoft Corporation" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            countryNamePlugin.default.install({ prototype: { $countryNameLocale: "Apple Inc." } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            countryNamePlugin.default.install({ prototype: { $countryNameLocale: "Ponicode" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            countryNamePlugin.default.install(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
