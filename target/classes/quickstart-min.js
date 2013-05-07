function addNumbers(b,a){return b+a
}function determineRaster(d){var c=Math.sqrt(d);
var a=Math.round(c);
var b=d%a;
return{aantalRijen:a,aantalKolommen:a+(Number)(b>0)}
}function alertElements(a){for(elementIndex in a){alert(a[elementIndex])
}}var persoon={naam:"Rody",leeftijd:37,kinderen:new Array(),toonNaam:function(){alert(this.naam)
}};