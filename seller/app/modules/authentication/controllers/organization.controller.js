import OrganizationService from '../v1/services/organization.service';

const organizationService = new OrganizationService();

class OrganizationController {
    /**
   * Create organization
   * @param {*} req    HTTP request object
   * @param {*} res    HTTP response object
   * @param {*} next   Callback argument to the middleware function
   * @return {callback}
   **/
    async create(req, res, next) {
        try {
            const data = req.body;
            const organization = await organizationService.create(data);
            return res.send(organization);

        } catch (error) {
            console.log('[OrganizationController] [create] Error -', error);
            next(error);
        }     
    }


    /**
   * Get all org
   * @param {*} req    HTTP request object
   * @param {*} res    HTTP response object
   * @param {*} next   Callback argument to the middleware function
   * @return {callback}
   **/
    async list(req, res, next) {
        try {
            const query = req.query;
            query.offset = parseInt(query.offset);
            query.limit = parseInt(query.limit);
            const organizations = await organizationService.list(query);
            return res.send(organizations);

        } catch (error) {
            console.log('[OrganizationController] [list] Error -', error);
            next(error);
        }
    }
    /**
 * get one org by id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
    async get(req, res, next) {
        try {
            const params = req.params;
            const organizations = await organizationService.get(params.organizationId);
            return res.send(organizations);

        } catch (error) {
            console.log('[OrganizationController] [get] Error -', error);
            next(error);
        }
    }

}

export default OrganizationController;
