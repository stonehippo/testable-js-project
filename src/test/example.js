// A really dumb test for the purposes of testing
describe('example test', function(){
    var instance 
    
    beforeEach(function() {
        instance = Example.create()
    })
    
    it('should be true', function() {
        expect(instance.yep).toEqual(true)
    })
})