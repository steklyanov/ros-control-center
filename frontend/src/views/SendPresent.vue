<template>
  <div class="wrapper">
    <ul class="nav nav-pills">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Node</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Topic</a>
          <a class="dropdown-item" href="#">Service</a>
          <a class="dropdown-item" href="#">All</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Send present</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Navigation goal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Send voice message</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">History</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Settings</a>
      </li>
      <li class="nav-item">
        <div class="progress" style="width: 80px">
          <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
        </div>
      </li>
    </ul>
    <div class="row">
      <!--        MENU BAR -->
      <div class=" card col-md-3 mb-4 bg-light">
        <div class="card-header">
          HEADER
        </div>
        <div>
          <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action active">
              Cras justo odio
            </button>
            <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
            <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
            <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
            <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
          </div>
        </div>
      </div>
      <div class="card col-md-9 mb-4 bg-light">
        <!--            MESSAGE 1 TEMPLATE-->
        <div class="row">
          <div class=" card col-md-8 mb-4 bg-light">
            <div>
            </div>
            <div class="card-header">
              HEADER 1
            </div>
            <div>
              <div class="col-md-6 mb-3">
                <label for="firstName">Full name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="mb-3">
                <label for="email">Address <span class="text-muted">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com">
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div class="mb-3">
                <label for="address2">Message(optional) <span class="text-muted">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
              </div>
            </div>

          </div>
          <div class=" card col-md-4 mb-4 bg-light">
            <div>
            </div>
            <div class="card-header">
              Log 1
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Send present</button>

        </div>
        <!--MESSAGE 2 TEMPLATE-->
        <div class="row">
          <div class=" card col-md-8 mb-4 bg-light">
            <div>
            </div>
            <div class="card-header">
              HEADER 2
            </div>
          </div>
          <div class=" card col-md-4 mb-4 bg-light">
            <div>
            </div>
            <div class="card-header">
              Log 2
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "SendPresent"
    }
</script>

<style scoped>

</style>
