// This function returns the dna rna pairs that would be complementary to each other. it turns 'T' to 'A' and 'G' to 'C'
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}