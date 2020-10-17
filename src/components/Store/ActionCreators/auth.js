import firebase from '../Firebase'
import * as actionTypes from '../Actions/Actions'

export const authAction = () => {
    return {
        type: actionTypes.AUTH_ACTION
    }
}

export const authActionSuccess = () => {
    return {
        type: actionTypes.AUTH_ACTION_SUCCESS
    }
}

export const authActionFail = () => {
    return {
        type: actionTypes.AUTH_ACTION_FAIL
    }
}

    

export const authenticate =  (email, password) => {
    return  (dispatch) => {
        dispatch(authAction())

        try {
            const db = firebase.firestore().collection('teesa-register')
        firebase.auth().signInWithEmailAndPassword(email,password)
           .then( async (res)=>{
               console.log(res.user.uid)

            //    await db.where('email', '==', email).get()
            //     .then(function(querySnapshot) {
            //         const user = []
            //         querySnapshot.forEach(function(doc) {
            //             const data = doc.data()
            //             user.push({id:doc.id, ...data})
            //             console.log(user[0].email, user[0].name );
            //             dispatch(authActionSuccess())
            //         });
            //     })
            }) 
        }
    
        catch(error) {
            console.log(error)
        }

        // try {
        //    let  exists = false;
        //     const _number = await firebase.firestore().collection('users').get();
        //     _number.docs.map(x => {
        //         if(x.data().number === number) exists = true;
        //     })

        //     if(exists) console.log('Exists ');
            
        //     console.log('Not Exists', exists)
        // }catch(errro) {
        //     console.log(errro)
        // }
        
        // let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha')
        // const number = '+256797297188'
        // firebase.auth().signInWithPhoneNumber(number,recaptcha)
        // .then(function(e){
        //     let code = prompt('Enter verification Code','')
        //     if(code == null) return
        //     e.confirm(code)
        //     .then(async function(result){
        //        await  firebase.firestore().collection('users').add({number}).then(response => {
        //             console.log('REsponse after writing', response)
        //         })
        //         console.log(result.user.uid,result.user.phoneNumber)
        //         // dispatch(authActionSuccess(result.user.uid,result.user.phoneNumber))
        //     })
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }
}