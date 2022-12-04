function canGiveBlood(donor, recipient){
    var On = ['AB+','AB-','A+','A-','B+','B-','O+','O-']
    var Op = ['AB+','A+','B+','O+']
    var Bn = ['AB+','AB-','B+','O+']
    var Bp = ['AB+','B+']
    var An = ['AB+','AB-','A+','A-']
    var Ap = ['AB+','A+']
    var ABn = ['AB+','AB-']
    var ABp = ['AB+']
  
    if (donor == 'O-' && On.includes(recipient)){
        return true;
    } else if (donor == 'O+' && Op.includes(recipient)){
        return true;
    } else if (donor == 'B-' && Bn.includes(recipient)){
        return true;
    } else if (donor == 'B+' && Bp.includes(recipient)){
        return true;
    } else if (donor == 'A-' && An.includes(recipient)){
        return true;
    } else if (donor == 'A+' && Ap.includes(recipient)){
        return true;
    } else if (donor == 'AB-' && ABn.includes(recipient)){
        return true;
    } else if (donor == 'AB+' && ABp.includes(recipient)){
        return true;
    }else{
        return "false";
    }
}

  console.log('Result:');
  console.log('(O+ to A+): ', canGiveBlood('O+', 'A+'));
  console.log('(A- to B-): ', canGiveBlood('A-', 'B-'));
  console.log('(A- to AB-): ', canGiveBlood('A-', 'AB-'));
  