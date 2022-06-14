import {AuthContext} from '../hoc/AuthProvider'
const { useContext } = require("react");

export function useAuth() {
    return useContext(AuthContext)
}

// create custom hook for reuse it in any component where we can work with state from AuthContext
// in other case we need write all this in each component? where we need state