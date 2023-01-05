class IndexCtrl {
    static async index(req: any, res: any) {
        return res.json({
            index: "hola"
        });
    }
}
export default IndexCtrl;