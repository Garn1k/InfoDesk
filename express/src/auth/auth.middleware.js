import AuthService from './auth.servise';
import { ErrorsUtil } from '../utils';

const { UnauthorizedError, PermissionError } = ErrorsUtil;

export default class AuthMiddleware{
    static authenticate(){
        return (req, res ,next) => {
            try {
                const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) throw new UnauthorizedError('1');

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) throw new UnauthorizedError('2');

        const user = AuthService.validateAccessToken(accessToken);

        if (!user) throw new UnauthorizedError('5');
                next();
            } catch (error) {
                next(error);
            }
        }
        
    }
    static authenticateFor(accessScopes){
        return (req, res ,next) => {
            const access = accessScopes.map((scope) => `access:${scope}`);
            try {
                const authorizationHeader = req.headers.authorization;
     
        if (!authorizationHeader) throw new UnauthorizedError('1');

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) throw new UnauthorizedError('2');

        const user = AuthService.validateAccessToken(accessToken);
        if (!user) throw new UnauthorizedError('5');

        const scope = `access:${user.role}`;

        if (!(access.includes(scope))) throw new PermissionError('6');
                next();
            } catch (error) {
                next(error);
            }
        }
    }
}