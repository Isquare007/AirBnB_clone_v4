/*$(document).ready( function () {
	let amenities = {};
	$('imput[type="checkbox"]').on('change', function() {
		let amenityId = $(this).data('id');
		if (this.checked) {
			amenities[amenityId] = amenityId;
		} else {
			delete amenities[amenityId];
		}

		$('h4#amenities').text(object.values(amenities).join(','));
	});
});*/

$(function () {
        let amenities = []
        $('input[type="checkbox"]').change(function() {
                const id = $(this).attr('data-id');
                const name = $(this).attr('data-name');
                if (this.checked) {
                        //amenity_id.append($(this).attr("data-name"))
                        amenities.push({name: name, id: id});
                        //amenity_id = $('amenities.popover').val();
                }
                else {
                        const index = amenities.findIndex(function (d) {
                        return d.id === id;
                        });
                        if (index > -1 ) {
                                amenity_id.splice(index, 1);
                        }
                }
                const amenityNames = amenities.map(function (d) {
                        return d.name.replace(':', '');
                }).join(', ');
                $('.amenities h4').text(amenityNames);
        });
});
