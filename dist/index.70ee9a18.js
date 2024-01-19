const{Factory:e,EasyScore:t,System:d}=Vex.Flow,o=new e({renderer:{elementId:"output",width:500,height:200}}),n=o.EasyScore();o.System().addStave({voices:[n.voice(n.notes("C#5/q, B4, A4, G#4",{stem:"up"})),n.voice(n.notes("C#4/h, C#4",{stem:"down"}))]}).addClef("treble").addTimeSignature("4/4"),o.draw();
//# sourceMappingURL=index.70ee9a18.js.map
